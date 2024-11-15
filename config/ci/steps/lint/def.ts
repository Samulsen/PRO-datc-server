import createRunner from "../../helpers/createRunner";

const eslintBin = "node_modules/.bin/eslint --color";

const runLint = createRunner(
  eslintBin,
  "Running eslint for:",
  "Eslint passed for:",
  "Eslint failed for:",
);

export default runLint;
