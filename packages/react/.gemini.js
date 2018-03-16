const dotenv = require("dotenv");

dotenv.config({ path: "./gemini/.env" });

module.exports = {
  rootUrl: "http://localhost:9001",
  gridUrl: "http://ondemand.saucelabs.com/wd/hub",
  screenshotsDir: "./gemini/screens",
  windowSize: "1024x768",
  compositeImage: true,
  sessionsPerBrowser: 3,
  system: {
    plugins: {
      sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      }
    }
  },
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        version: "54.0",
        platform: "macOs 10.12",
        name: "gemini visual regression tests"
      }
    }
  },
  sets: {
    chrome: {
      files: ["gemini/suites"]
    }
  }
};
