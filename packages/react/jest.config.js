module.exports = {
  collectCoverageFrom: [
    "!src/index.js",
    "src/**/*.{js,jsx}",
    "!src/**/*.story.{js,jsx}",
    "!src/fixtures/**/*",
    "!src/stories/**/*",
    "!src/playground/**/*",
    "!**/node_modules/**"
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
    "\\.(css|scss|svg)$": "<rootDir>/support/test/fileMock.js"
  },
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFiles: ["raf/polyfill"],
  setupTestFrameworkScriptFile: "<rootDir>/support/setupTests.js",
  unmockedModulePathPatterns: ["<rootDir>/node_modules"]
};
