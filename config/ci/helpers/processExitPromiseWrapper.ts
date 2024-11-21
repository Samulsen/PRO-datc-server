import { failExitRunnerLog, successExitRunnerLog } from "./loggers";

function processExitPromiseWrapper<T extends (...args: any[]) => Promise<any>>(
  func: T,
): (...args: Parameters<T>) => void {
  return (...args: Parameters<T>) => {
    func(...args)
      .then(() => {
        successExitRunnerLog();
        process.exit(0);
      })
      .catch(() => {
        failExitRunnerLog();
        process.exit(1);
      });
  };
}

export default processExitPromiseWrapper;
