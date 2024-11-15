import createRunner from "../../helpers/createRunner";

const tscBin = "node_modules/.bin/tsc --noEmit --pretty --project";

const runCompile = createRunner(
  tscBin,
  "Running compile check for:",
  "Compile check passed for",
  "Compile check failed for",
);

const targetString = process.argv[2];

runCompile(targetString, "root");

export default runCompile;
