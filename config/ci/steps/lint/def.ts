import chalk = require("chalk");

import createRunner from "../../helpers/createRunner";

const eslintBin = "node_modules/.bin/eslint --color";

const runLint = createRunner(eslintBin, chalk.magenta("Eslint"));

export default runLint;
