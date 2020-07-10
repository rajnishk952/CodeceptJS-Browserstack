const { setHeadlessWhen } = require("@codeceptjs/configure");
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
      desiredCapabilities: {}
    },
  },
  
  // For parallel execution
  multiple: {
    bs: {
      browsers: [
        {
            browser: "Safari",
            desiredCapabilities: {
            "os": "OS X",
            "os_version": "Catalina",
            "project": "Codecept",
            "build": "Parallel",
            "name": "Parallel Test Safari",
            "browserstack.debug": "true",
            'browserstack.networkLogs' : 'true',
          },
        },

        {
            browser: "Firefox",
            desiredCapabilities: {
            "os": "Windows",
            "os_version": "10",
            "project": "Codecept",
            "build": "Parallel",
            "name": "Parallel Test Firefox",
            "browserstack.debug": "true",
            'browserstack.networkLogs' : 'true',
            },
        },
      ],
    },
  },

  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
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
