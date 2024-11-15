import { exec } from "child_process";
import chalk = require("chalk");
import { selectTarget, TTarget, TTargetPathOption } from "./constants";
import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "./loggers";

/**
 *
 * @param commandTemplate - the filled binary link with all necessary flags
 * @param startMessage - the message to be displayed when the run starts
 * @param successMessage - the message to be displayed when the run is successful
 * @param failureMessage - the message to be displayed when the run fails
 * @param isJest - flag to indicate if the command is a jest command, in which case the error message is in stderr
 *
 */
function createRunner(
  commandTemplate: string,
  startMessage: string,
  successMessage: string,
  failureMessage: string,
  isJest = false,
) {
  /**
   * @param target - The target to run the command on, needs to be a valid lib or app
   * @param selectTargetPath - The path to run the command on, either root or src, usually src (in case of ts-compile needs to be root because of tsconfig.json location)
   */
  return function run(target: string, selectTargetPath: TTargetPathOption) {
    if (!target) {
      console.log(chalk.red("Please provide a target."));
      process.exit(1);
    }

    const validTargets: TTarget[] = [
      "frontendUI",
      "frontendAdmin",
      "libTheme",
      "libComponents",
    ];
    // @ts-expect-error .includes shouldnt complain about target being a string, as the whole point of this check is to ensure it is a valid target
    if (!validTargets.includes(target)) {
      console.log(
        chalk.red("Invalid target provided..."),
        "Provided:",
        chalk.yellow(target),
      );
      process.exit(1);
    }
    // @ts-expect-error it will exit if targetString is not valid
    const { path, tag } = selectTarget(target, selectTargetPath);
    startRunnerLog(startMessage, tag);
    // constructing the actual command to be run, in conjunction with the path (that is pointing from a valid target to its location in the targetMap)
    const command = `${commandTemplate} ${path}`;

    exec(command, (error, stdout, stderr) => {
      // for eslint, jest and ts-compile error messages containing the failure message will passed down here
      if (error) {
        if (isJest) console.log(stderr);
        console.log(stdout);
        failIndicatorRunnerLog(failureMessage, tag);
        failExitRunnerLog();
        process.exit(1); // Exit with error code
      }
      // in case of jest, an success is indicated by stderr containing the success message and in stdout containing coverage information
      if (stderr && isJest) {
        console.log(stderr);
        console.log(stdout);
      }
      // in all the other cases (eslint, ts-compile) success is indicated by stdout containing the success message (which is actually empty)
      successIndicatorRunnerLog(successMessage, tag);
      successExitRunnerLog();
      process.exit(0); // Exit with success code
    });
  };
}

export default createRunner;
