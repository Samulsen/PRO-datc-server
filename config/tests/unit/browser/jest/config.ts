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
  transformIgnorePatterns: [
    // @fluentui/react-icons
    "node_modules/(?!(@fluentui/react-icons)/)",
  ],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  testMatch: ["**/tests.{ts,tsx}"],
  rootDir: "../../../../../",
  collectCoverage: true,
};

export default config;
