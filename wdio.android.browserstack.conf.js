let { join } = require("path");

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "rui43",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BDoyysuqGTp7rmK2BZxM",
  logLevel: "info",
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  updateJob: false,
  screenshotPath: "./errorShots/",

  services: ["@browserstack/wdio-browserstack-service"],

  specs: ["./test/specs/login.spec.js"],

  capabilities: [
    {
      platformName: "android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "Google Pixel 3",
      "appium:appPackage": "pt.dev.kuantokusta",
      "appium:appActivity": "host.exp.exponent.MainActivity",
      "appium:app":
        process.env.BROWSERSTACK_APP_ID ||
        "bs://8ad1918f647dbfb057825840bdd5f371986a5673",

      "bstack:options": {
        projectName: "Login Form",
        sessionName: "Login Test",
        debug: "true",
        networkLogs: "true",
        userName: "rui43",
        accessKey: "BDoyysuqGTp7rmK2BZxM",
      },
    },
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
