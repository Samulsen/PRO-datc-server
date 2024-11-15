import runLint from "./def";
import processExitPromiseWrapper from "../../helpers/processExitPromiseWrapper";

const targetString = process.argv[2];

processExitPromiseWrapper(runLint)(targetString, "src");
