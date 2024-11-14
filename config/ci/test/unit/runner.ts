import { exec } from "child_process";
import chalk = require("chalk");
import { selectTarget } from "../../constants";

const unitTestRootBrowser = "config/tests/unit/browser";
const tsConfigForJestBrowserEnvironment = `${unitTestRootBrowser}/tsconfig.json`;
const jestConfigForBrowserEnvironment = `${unitTestRootBrowser}/jest/config.ts`;
const jestConfiguredForBrowser = `npx ts-node --project ${tsConfigForJestBrowserEnvironment} node_modules/.bin/jest --config ${jestConfigForBrowserEnvironment} --color`;

const runTests = (path: string, tag: string) => {
  console.log(
    "-->",
    chalk.blueBright("Running unit tests for:"),
    chalk.bgMagentaBright(tag),
  );

  const command = `${jestConfiguredForBrowser} ${path}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error.message);
      console.log(stdout);
      console.log(
        "-->",
        chalk.redBright("Unit Tests failed for:"),
        chalk.bgMagentaBright(tag),
      );
      console.log(
        "-->",
        chalk.blueBright("Will exit with error code"),
        chalk.bgRedBright("1"),
      );
      process.exit(1); // Exit with error code
    }
    if (stderr) {
      console.log(stderr);
      console.log(stdout);
      console.log(
        "-->",
        chalk.greenBright("Unit Tests passed for:"),
        chalk.bgMagentaBright(tag),
      );
      console.log(
        "-->",
        chalk.blueBright("Will exit with success code"),
        chalk.bgGreenBright("0"),
      );
      process.exit(0); // Exit with success code
    }
  });
};

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
