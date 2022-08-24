const { join } = require("path");
const { config } = require("./wdio.shared.conf");

// ======================
//  Capabilities Configs
// ======================
//
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "15.5",
    "appium:deviceName": "iPhone 12 Pro",
    "appium:automationName": "XCUITest",
    "appium:appPackage": "pt.dev.kuantokusta",
    "appium:appActivity": "host.exp.exponent.MainActivity",
    "appium:noReset": false,
    "appium:fullReset": true,
    "appium:app": join(process.cwd(), "./app/kuantokusta.app"),
  },
];

// ======================
//  Runner Configs
// ======================
//
config.port = 4723;

// ======================
//  Appium Server Configs
// ======================
//
config.services = [
  [
    "appium",
    {
      args: {
        port: 4723,
      },
    },
  ],
];

exports.config = config;
