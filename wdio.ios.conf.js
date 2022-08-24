const video = require("wdio-video-reporter");

exports.config = {
  runner: "local",
  host: "localhost",
  path: "/wd/hub",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  maxInstances: 1,
  framework: "mocha",
  specs: ["./test/specs/sub-familia.spec.js"],

  logLevels: {
    webdriver: "info",
    "@wdio/appium-service": "info",
  },

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    // [
    //   video,
    //   {
    //     saveAllVideos: true, // If true, also saves videos for successful test cases
    //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
    //   },
    // ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
