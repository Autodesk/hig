require('dotenv').config();

module.exports = {
  rootUrl: "http://localhost:8080",
  gridUrl: " http://ondemand.saucelabs.com/wd/hub",
  windowSize: "1024x768",
  sessionsPerBrowser: 3, system: {
    plugins: {
      sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      }
    }
  }, browsers:        {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        version: '54.0',
        platform: 'macOs 10.12',
        name: 'gemini visual regression tests'
      }
    }, //#  firefox:
    //#    desiredCapabilities:
    //#      browserName: 'firefox'
    //#      version: '46.0'
    //#      platform: 'macOs 10.12'
    //#      name: 'gemini visual regression tests'
    edge:   {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        version:     '14.14393',
        platform:    'Windows 10',
        name:        'gemini visual regression tests'
      }
    }
  }
}