import chalk = require("chalk");

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
