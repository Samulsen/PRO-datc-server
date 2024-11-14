import chalk = require("chalk");

import runCompile from "./compile/runner";
import runTest from "./unit-tests/runner";
import runLint from "./lint/runner";

import { selectTarget, targetMap } from "./constants";

import {
  startRunnerLog,
  failExitRunnerLog,
  failIndicatorRunnerLog,
  successExitRunnerLog,
  successIndicatorRunnerLog,
} from "./helper";

type TTarget = keyof typeof targetMap;

const targets = Object.keys(targetMap) as TTarget[];
