import { exec } from "child_process";
import chalk = require("chalk");

const unitTestRootBrowser = "config/tests/unit/browser";
const tsConfigForJestBrowserEnvironment = `${unitTestRootBrowser}/tsconfig.json`;
const jestConfigForBrowserEnvironment = `${unitTestRootBrowser}/jest/config.ts`;
const jestConfiguredForBrowser = `npx ts-node --project ${tsConfigForJestBrowserEnvironment} node_modules/.bin/jest --config ${jestConfigForBrowserEnvironment} --color`;

const runTests = (path: string) => {
  const command = `${jestConfiguredForBrowser} ${path}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error.message);
      console.log(stdout);
      process.exit(1); // Exit with error code
    }
    if (stderr) {
      console.log(stderr);
      console.log(stdout);
      process.exit(0); // Exit with success code
    }
  });
};

// Get command-line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please provide a path to run tests.");
  process.exit(1);
}

// Run tests for each provided path
args.forEach(runTests);
