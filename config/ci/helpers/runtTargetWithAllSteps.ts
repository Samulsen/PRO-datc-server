import chalk = require("chalk");

import runCompile from "../steps/compile/def";
import runTest from "../steps/unit-tests/def";
import runLint from "../steps/lint/def";

import { selectTarget, TTarget } from "../helpers/constants";

export default async function runTargetWithAllSteps(
  target: TTarget,
  emitLabels = true,
) {
  const { tag } = selectTarget(target, "src");
  console.log("\n");
  console.log(chalk.blue("\nCurrent:"), chalk.yellowBright(tag));
  await Promise.all([
    runLint(target, "src", emitLabels),
    runCompile(target, "root", emitLabels),
    runTest(target, "src", emitLabels),
  ]).then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.clear();
        resolve();
      }, 1000);
    });
  });
}
