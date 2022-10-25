const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    // Appium: {
    //   app: 'http://google.com/',
    //   platform: 'Android',
    //   device: 'pixel_5'
    // }
    WebDriver: {
      url: 'https://google.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'appium-handson'
}