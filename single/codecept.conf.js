const { setHeadlessWhen } = require('@codeceptjs/configure');
const _dotenv = require('dotenv').config()
const _user = process.env.user;
const _key = process.env.key;

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {

    WebDriver: {
      url : '/',
      user: _user,
      key: _key,
      protocol: 'https',
      host: 'hub-cloud.browserstack.com',
      path: '/wd/hub',
      browser : "chrome",
      desiredCapabilities: {
        'os' : 'Windows', // you can select device
        'os_version' : '10',
        'project' : 'Codecept',
        'build' : 'Single',
        'name' : 'Single Test Windows 10',
        'browserstack.debug' : 'true',
        'browserstack.networkLogs' : 'true',
      }
    },

  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
  }
}