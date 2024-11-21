import chalk = require("chalk");

import createRunner from "../../helpers/createRunner";

const tscBin = "node_modules/.bin/tsc --noEmit --pretty --project";

const runCompile = createRunner(
  tscBin,
  chalk.hex("#8ec5f5")("Typescript compile check"),
);

export default runCompile;
