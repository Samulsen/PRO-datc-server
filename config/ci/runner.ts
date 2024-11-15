import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runCompile from "./steps/compile/runner";
import runTest from "./steps/unit-tests/runner";
import runLint from "./steps/lint/runner";

import { selectTarget, targetMap } from "./helpers/constants";

import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "./helpers/loggers";

type TTarget = keyof typeof targetMap;

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// start the progress bar with a total value of 200 and start value of 0
bar.start(200, 0);

// update the current value in your application
bar.update(100);
