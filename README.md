# CodeceptJS Browserstack Integration
[CodeceptJS](https://github.com/codecept-js/CodeceptJS) is a testing framework for end-to-end testing with WebDriver (or others). It abstracts browser interaction to simple steps that are written from a user perspective. 

## Setup
- Clone the Repo
- Install dependencies `npm install`
- You can setup environment variables for all sample repos (see `Notes`) or update `.env` file inside the `root` directory of your repo with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)
- To integrate your existing tests with Browserstack, make relevant changes in `*.conf.js` as per your test needs. Refer to `single/local/parallel` config files in the repo.


## Running your tests
- To run a single test, `npm run single`
- To run local tests, `npm run local`
- To run parallel tests, `npm run parallel`

## Notes
- You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
- To test on a different set of OS + browsers, check out our [Platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)
- You can export the environment variables for the Username and Access Key of your BrowserStack account
 ``` shell
 export BROWSERSTACK_USERNAME=<browserstack-username> && 
 export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
 ```
