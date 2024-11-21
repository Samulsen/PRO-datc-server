import runTargetWithAllSteps from "../helpers/runtTargetWithAllSteps";

const targetString = process.argv[2];

// @ts-expect-error is okay because the string will be checked in the run functions
runTargetWithAllSteps(targetString);
