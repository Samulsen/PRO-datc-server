import runTests from "./def";
import processExitPromiseWrapper from "../../helpers/processExitPromiseWrapper";

const targetString = process.argv[2];

processExitPromiseWrapper(runTests)(targetString, "src");
