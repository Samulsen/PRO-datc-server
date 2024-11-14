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

const unitTestRootBrowser = "config/tests/unit/browser";
const tsConfigForJestBrowserEnvironment = `${unitTestRootBrowser}/tsconfig.json`;
const jestConfigForBrowserEnvironment = `${unitTestRootBrowser}/jest/config.ts`;
const jestConfiguredForBrowser = `npx ts-node --project ${tsConfigForJestBrowserEnvironment} node_modules/.bin/jest --config ${jestConfigForBrowserEnvironment} --color`;

function runTests(path: string, tag: string) {
  startRunnerLog("Running unit tests for", tag);

  const command = `${jestConfiguredForBrowser} ${path}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error.message);
      console.log(stdout);
      failIndicatorRunnerLog("Unit Tests failed for", tag);
      failExitRunnerLog();
      process.exit(1); // Exit with error code
    }
    if (stderr) {
      console.log(stderr);
      console.log(stdout);
      successIndicatorRunnerLog("Unit Tests passed for", tag);
      successExitRunnerLog();
      process.exit(0); // Exit with success code
    }
  });
}

// Get command-line arguments
const targetString = process.argv[2];

if (!targetString) {
  console.log(chalk.red("Please provide a target to run tests for."));
  process.exit(1);
}

if (
  targetString === "frontendUI" ||
  targetString === "frontendAdmin" ||
  targetString === "libTheme" ||
  targetString === "libComponents"
) {
  const { path, tag } = selectTarget(targetString, "src");
  runTests(path, tag);
} else {
  console.log(chalk.red("Invalid target provided."));
  process.exit(1);
}
