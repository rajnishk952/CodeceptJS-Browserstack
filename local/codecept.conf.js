const { setHeadlessWhen } = require("@codeceptjs/configure");
const browserstack = require("browserstack-local");
const _dotenv = require('dotenv').config()
const _user = process.env.user;
const _key = process.env.key;
// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",

  helpers: {
    WebDriver: {
      url: "/",
      user: _user,
      key: _key,
      protocol: "https",
      host: "hub-cloud.browserstack.com",
      path: "/wd/hub",
      browser: "chrome",
      desiredCapabilities: {
        os: "Windows", // you can select device
        os_version: "10",
        project: "Codecept",
        build: "Local",
        name: "Local Test Windows 10",
        "browserstack.debug": "true",
        "browserstack.local": "true",
        "browserstack.networkLogs" : 'true',
      },
    },
  },

  include: {
    I: "./steps_file.js",
  },

  //Run Local Instance
  bootstrap: function (bs) {
    console.log("Connecting Local");
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ 'key': _key }, function (error) {
        if (error) return error;

        console.log('Connected. Now testing...');
        bs();
      });
  },

  teardown: function (bs) {
      module.exports.bs_local.stop(() => {
        console.log("Disconnected Local");
        bs();
      });
  },

  mocha: {},
  name: "CodeceptJS",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
