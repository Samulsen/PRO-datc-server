import createRunner from "../../helpers/createRunner";

const eslintBin = "node_modules/.bin/eslint --color";

const targetString = process.argv[2];

const runLint = createRunner(
  eslintBin,
  "Running eslint for:",
  "Eslint passed for",
  "Eslint failed for",
);

runLint(targetString, "src");

export default runLint;
