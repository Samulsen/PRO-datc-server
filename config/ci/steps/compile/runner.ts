import { exec } from "child_process";
import chalk = require("chalk");

import { selectTarget } from "../../helpers/constants";

import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "../../helpers/loggers";

const tscBin = "node_modules/.bin/tsc --noEmit --pretty --project";

function runCompile(path: string, tag: string) {
  startRunnerLog("Running compile check for:", tag);
  const command = `${tscBin} ${path}`;

  exec(command, (error, stdout) => {
    if (error) {
      console.log(stdout);
      failIndicatorRunnerLog("Compile check failed for", tag);
      failExitRunnerLog();
      process.exit(1); // Exit with error code
    }
    successIndicatorRunnerLog("Compile check passed for", tag);
    successExitRunnerLog();
    process.exit(0); // Exit with success code
  });
}

// Get command-line arguments
const targetString = process.argv[2];

if (!targetString) {
  console.log(
    chalk.red("Please provide a target to run the compile check for."),
  );
  process.exit(1);
}

if (
  targetString === "frontendUI" ||
  targetString === "frontendAdmin" ||
  targetString === "libTheme" ||
  targetString === "libComponents"
) {
  const { path, tag } = selectTarget(targetString, "root");
  runCompile(path, tag);
} else {
  console.log(chalk.red("Invalid target provided."));
  process.exit(1);
}

export default runCompile;
