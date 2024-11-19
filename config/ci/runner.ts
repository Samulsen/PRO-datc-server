import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runTargetWithAllSteps from "./helpers/runtTargetWithAllSteps";
import { targetMap, TTarget } from "./helpers/constants";

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

async function runAllTargets() {
  const headerLog = () => {
    console.log(chalk.blue("Running CI on all targets..."));
  };
  headerLog();
  bar.start(targets.length, 0);
  await runTargetWithAllSteps("frontendAdmin");

  headerLog();
  bar.increment();
  await runTargetWithAllSteps("frontendUI");

  headerLog();
  bar.increment();
  await runTargetWithAllSteps("libTheme");

  headerLog();
  bar.increment();
  await runTargetWithAllSteps("libComponents");

  bar.increment();
  bar.stop();
  console.log(chalk.green("All targets passed!"));
}

runAllTargets();
