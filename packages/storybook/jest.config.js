module.exports = {
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "<rootDir>/support/jest/fileMock.js"
  },
  modulePaths: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFiles: ["raf/polyfill"],
  setupTestFrameworkScriptFile: "<rootDir>/support/jest/setupTests.js",
  unmockedModulePathPatterns: ["node_modules"]
};
