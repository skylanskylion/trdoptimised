// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    // For Travis CI only
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'https://therightdoctors.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000000,
    print: function() {}
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './screenshots/'
        })
    );
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './screenshots/',
      screenshotsFolder: 'images',
      takeScreenshots: true,
      //takeScreenshotsOnlyOnFailures: true,
      //showPassed: false,
      fileName: 'TestReport'
    }));
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};