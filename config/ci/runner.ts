import chalk = require("chalk");
import cliProgress = require("cli-progress");

import runCompile from "./steps/compile/def";
import runTest from "./steps/unit-tests/def";
import runLint from "./steps/lint/def";

import { selectTarget, targetMap } from "./helpers/constants";

import { failExitRunnerLog, successExitRunnerLog } from "./helpers/loggers";

type TTarget = keyof typeof targetMap;

const targets = Object.keys(targetMap) as TTarget[];

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

targets.forEach((target) => {
  runCompile(target, "root");
  runLint(target, "src");
  runTest(target, "src");
});
