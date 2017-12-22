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
    "global": {
      "branches": 60,
      "functions": 60,
      "lines": 60,
      "statements": 60
    }
  },
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx", "json"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
  unmockedModulePathPatterns: ["<rootDir>/node_modules"]
};
