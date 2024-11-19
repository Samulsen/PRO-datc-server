import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runTargetWithAllSteps from "./helpers/runtTargetWithAllSteps";
import { targetMap, TTarget } from "./helpers/constants";

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

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
