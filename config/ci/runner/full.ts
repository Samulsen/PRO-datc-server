import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runTargetWithAllSteps from "../helpers/runtTargetWithAllSteps";
import { targetMap, TTarget } from "../helpers/constants";

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

async function runAllTargets() {
  const headerLog = () => {
    console.log(chalk.blue("Running CI on all targets..."));
  };
  const timeoutWrapper = async (target: TTarget) => {
    await runTargetWithAllSteps(target).then(() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.clear();
          resolve();
        }, 3000);
      });
    });
  };

  headerLog();
  bar.start(targets.length, 0);
  await timeoutWrapper("frontendAdmin");

  headerLog();
  bar.increment();
  await timeoutWrapper("frontendUI");

  headerLog();
  bar.increment();
  await timeoutWrapper("libComponents");

  headerLog();
  bar.increment();
  await timeoutWrapper("libTheme");

  bar.increment();
  bar.stop();
  console.log(chalk.green("All targets passed!"));
}

runAllTargets();
