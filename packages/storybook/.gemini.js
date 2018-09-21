const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const chromeCapabilities = {
  browserName: "chrome",
  version: "65.0",
  platform: "macOs 10.12",
  name: "Gemini visual regression tests"
};

module.exports = {
  rootUrl: "http://www.example.com",
  gridUrl: "http://ondemand.saucelabs.com/wd/hub",
  screenshotsDir: "./gemini/screens",
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
    chromeReact: {
      rootUrl: "http://localhost:9876",
      screenshotsDir: "./gemini/chromeReact",
      desiredCapabilities: chromeCapabilities
    }
  },
  sets: {
    react: {
      files: ["../**/*.gemini.js"],
      browsers: ["chromeReact"]
    }
  }
};
