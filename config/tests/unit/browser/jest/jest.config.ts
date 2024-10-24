import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx"],
  transformIgnorePatterns: [""],
};

export default config;
