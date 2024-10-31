const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const fs = require("fs");
const jsonc = require("jsonc-parser");

const tsconfigPath = path.resolve(__dirname, "../../../../../tsconfig.json");
const tsconfigContent = fs.readFileSync(tsconfigPath, "utf8");
const compilerOptions = jsonc.parse(tsconfigContent).compilerOptions;

const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/config/tests/unit/browser/tsconfig.json",
      },
    ],
  },
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  // missing transform for fluent icons
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // missing imports from ts-jest for tsconfig paths
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  // missing test pattern
  testMatch: ["**/tests.{ts,tsx}"],
  // roots: ["<rootDir>/apps/frontend/ui/src"],
  rootDir: "../../../../../",
};

export default config;
