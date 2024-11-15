import chalk = require("chalk");

function createLog(
  info: string,
  step: string,
  target: string,
  emitTargetFlag: boolean,
) {
  console.log(
    "-->",
    info,
    step,
    emitTargetFlag ? "" : `for: ${chalk.yellow(target)}`,
  );
}

function startRunnerLog(step: string, target: string, emitTargetFlag: boolean) {
  createLog(chalk.blue("Running"), step, target, emitTargetFlag);
}

function failIndicatorRunnerLog(
  step: string,
  target: string,
  emitTargetFlag: boolean,
) {
  createLog(chalk.red("Failed"), step, target, emitTargetFlag);
}

function successIndicatorRunnerLog(
  step: string,
  target: string,
  emitTargetFlag: boolean,
) {
  createLog(chalk.green("Success"), step, target, emitTargetFlag);
}

function successExitRunnerLog() {
  console.log("-->", chalk.blueBright("Will exit with success code"), "0");
}

function failExitRunnerLog() {
  console.log("-->", chalk.blueBright("Will exit with error code"), "1");
}

export {
  startRunnerLog,
  failIndicatorRunnerLog,
  failExitRunnerLog,
  successIndicatorRunnerLog,
  successExitRunnerLog,
};
