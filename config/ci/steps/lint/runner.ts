import runLint from "./def";

const targetString = process.argv[2];

runLint(targetString, "src");
