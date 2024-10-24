import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx"],
  // missing transform for fluent icons
  transformIgnorePatterns: [""],
  // missing imports from ts-jest for tsconfig paths
  moduleNameMapper: {},
  // missing test pattern
  testMatch: [],
};

export default config;
