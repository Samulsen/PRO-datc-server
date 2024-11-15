import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runCompile from "./steps/compile/def";
import runTest from "./steps/unit-tests/def";
import runLint from "./steps/lint/def";

import { selectTarget, targetMap } from "./helpers/constants";

type TTarget = keyof typeof targetMap;

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

async function runTargetWithAllSteps(target: TTarget) {
  const { tag } = selectTarget(target, "src");
  console.log("\n");
  console.log(chalk.blue("\nCurrent:"), chalk.yellowBright(tag));
  await Promise.all([
    runLint(target, "src", true),
    runCompile(target, "root", true),
    runTest(target, "src", true),
  ]).then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.clear();
        resolve();
      }, 1000);
    });
  });
}

async function runAllTargets() {
  console.log(chalk.blue("Running CI on all targets..."));
  bar.start(targets.length, 0);
  await runTargetWithAllSteps("frontendAdmin");

  console.log(chalk.blue("Running CI on all targets..."));
  bar.increment();
  await runTargetWithAllSteps("frontendUI");

  console.log(chalk.blue("Running CI on all targets..."));
  bar.increment();
  await runTargetWithAllSteps("libTheme");

  console.log(chalk.blue("Running CI on all targets..."));
  bar.increment();
  await runTargetWithAllSteps("libComponents");

  bar.increment();
  bar.stop();
  console.log(chalk.green("All targets passed!"));
}

runAllTargets();
