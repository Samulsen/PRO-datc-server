import { exec } from "child_process";
import chalk = require("chalk");

import { selectTarget } from "../constants";

import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "../helper";

const eslintBin = "node_modules/.bin/eslint --color";

function runLint(path: string, tag: string) {
  startRunnerLog("Running eslint for:", tag);
  const command = `${eslintBin} ${path}`;

  exec(command, (error, stdout) => {
    if (error) {
      console.log(stdout);
      failIndicatorRunnerLog("Eslint failed for", tag);
      failExitRunnerLog();
      process.exit(1); // Exit with error code
    }
    successIndicatorRunnerLog("Eslint passed for", tag);
    successExitRunnerLog();
    process.exit(0); // Exit with success code
  });
}

// Get command-line arguments
const targetString = process.argv[2];

if (!targetString) {
  console.log(chalk.red("Please provide a target to run lint for."));
  process.exit(1);
}

if (
  targetString === "frontendUI" ||
  targetString === "frontendAdmin" ||
  targetString === "libTheme" ||
  targetString === "libComponents"
) {
  const { path, tag } = selectTarget(targetString, "src");
  runLint(path, tag);
} else {
  console.log(chalk.red("Invalid target provided."));
  process.exit(1);
}
