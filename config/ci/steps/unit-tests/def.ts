import createRunner from "../../helpers/createRunner";

const unitTestRootBrowser = "config/tests/unit/browser";
const tsConfigForJestBrowserEnvironment = `${unitTestRootBrowser}/tsconfig.json`;
const jestConfigForBrowserEnvironment = `${unitTestRootBrowser}/jest/config.ts`;
const jestConfiguredForBrowser = `npx ts-node --project ${tsConfigForJestBrowserEnvironment} node_modules/.bin/jest --config ${jestConfigForBrowserEnvironment} --color`;

const runTests = createRunner(
  jestConfiguredForBrowser,
  "Running unit tests for:",
  "Unit Tests passed for:",
  "Unit Tests failed for:",
  true,
);

export default runTests;
