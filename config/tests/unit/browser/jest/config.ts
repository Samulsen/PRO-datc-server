import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";
import tsconfig from "../../../../../tsconfig.json";

console.log("tsconfig", tsconfig);

const config: JestConfigWithTsJest = {
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {}],
  },
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/tests/unit/browser/jest/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  // missing transform for fluent icons
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // missing imports from ts-jest for tsconfig paths
  // moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  //   prefix: "<rootDir>/",
  // }),
  // missing test pattern
  testMatch: ["**/tests.{ts,tsx}"],
  // roots: ["<rootDir>/apps/frontend/ui/src"],
  rootDir: "../../../../../",
};

export default config;
