import chalk = require("chalk");

function startRunnerLog(action: string, target: string) {
  console.log("-->", chalk.blueBright(action), chalk.bgMagentaBright(target));
}

function failIndicatorRunnerLog(action: string, target: string) {
  console.log("-->", chalk.redBright(action), chalk.bgMagentaBright(target));
}

function failExitRunnerLog() {
  console.log(
    "-->",
    chalk.blueBright("Will exit with error code"),
    chalk.bgRedBright("1"),
  );
}

function successIndicatorRunnerLog(action: string, target: string) {
  console.log("-->", chalk.greenBright(action), chalk.bgMagentaBright(target));
}

function successExitRunnerLog() {
  console.log(
    "-->",
    chalk.blueBright("Will exit with success code"),
    chalk.bgGreenBright("0"),
  );
}

export {
  startRunnerLog,
  failIndicatorRunnerLog,
  failExitRunnerLog,
  successIndicatorRunnerLog,
  successExitRunnerLog,
};
