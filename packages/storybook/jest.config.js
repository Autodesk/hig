module.exports = {
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/index.js",
  ],
  coverageDirectory: "<rootDir>/packages/storybook/coverage",
  coveragePathIgnorePatterns: [
    "node_modules",
    "packages\/vanilla",
    "src\/playground",
    "examples\/redux",
    "__stories__",
    "__gemini__"
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "<rootDir>/packages/storybook/support/jest/fileMock.js"
  },
  modulePaths: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json"],
  rootDir: "../../",
  setupFiles: ["raf/polyfill"],
  setupTestFrameworkScriptFile: "<rootDir>/packages/storybook/support/jest/setupTests.js",
  testPathIgnorePatterns: ["<rootDir>/packages/vanilla"],
  unmockedModulePathPatterns: ["node_modules"]
};
