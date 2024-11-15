import createRunner from "../../helpers/createRunner";
import chalk = require("chalk");

const unitTestRootBrowser = "config/tests/unit/browser";
const tsConfigForJestBrowserEnvironment = `${unitTestRootBrowser}/tsconfig.json`;
const jestConfigForBrowserEnvironment = `${unitTestRootBrowser}/jest/config.ts`;
const jestConfiguredForBrowser = `npx ts-node --project ${tsConfigForJestBrowserEnvironment} node_modules/.bin/jest --config ${jestConfigForBrowserEnvironment} --color`;

const runTests = createRunner(
  jestConfiguredForBrowser,
  chalk.hex("#FFA500")("Jest RTL Unit Tests"),
  true,
);

export default runTests;
