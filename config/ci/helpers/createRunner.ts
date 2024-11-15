import { exec } from "child_process";
import chalk = require("chalk");
import { selectTarget } from "./constants";
import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "./loggers";

function createRunner(
  commandTemplate: string,
  startMessage: string,
  successMessage: string,
  failureMessage: string,
) {
  return function run(targetString: string, selectTargetPath: string) {
    if (!targetString) {
      console.log(chalk.red("Please provide a target."));
      process.exit(1);
    }

    const validTargets = [
      "frontendUI",
      "frontendAdmin",
      "libTheme",
      "libComponents",
    ];
    if (!validTargets.includes(targetString)) {
      console.log(
        chalk.red("Invalid target provided..."),
        "Provided:",
        targetString,
      );
      process.exit(1);
    }
    // @ts-expect-error it will exit if targetString is not valid
    const { path, tag } = selectTarget(targetString, selectTargetPath);
    startRunnerLog(startMessage, tag);
    const command = `${commandTemplate} ${path}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(stdout);
        failIndicatorRunnerLog(failureMessage, tag);
        failExitRunnerLog();
        process.exit(1); // Exit with error code
      }
      if (stderr) {
        console.log(stderr);
      }
      successIndicatorRunnerLog(successMessage, tag);
      successExitRunnerLog();
      process.exit(0); // Exit with success code
    });
  };
}

export default createRunner;
