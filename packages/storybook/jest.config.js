module.exports = {
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "<rootDir>/packages/storybook/support/jest/fileMock.js"
  },
  modulePaths: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json"],
  rootDir: "../../",
  setupFiles: ["raf/polyfill"],
  setupTestFrameworkScriptFile: "<rootDir>/packages/storybook/support/jest/setupTests.js",
  unmockedModulePathPatterns: ["node_modules"]
};
