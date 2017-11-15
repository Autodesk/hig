const dotenv = require("dotenv");

dotenv.config({ path: "./dev/.env" });

module.exports = {
  rootUrl: "http://localhost:8080",
  gridUrl: " http://ondemand.saucelabs.com/wd/hub",
  screenshotsDir: "./dev/gemini-screens",
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
  }
};
