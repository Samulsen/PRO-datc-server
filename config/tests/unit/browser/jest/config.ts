import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  // missing transform for fluent icons
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // missing imports from ts-jest for tsconfig paths
  moduleNameMapper: {},
  // missing test pattern
  testMatch: ["**/tests.{ts,tsx}"],
  // roots: ["<rootDir>/apps/frontend/ui/src"],
  rootDir: "../../../../../",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/config/tests/unit/browser/tsconfig.json",
    },
  },
};

export default config;
