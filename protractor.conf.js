// protractor.conf.js

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  takeScreenshots: true,
  savePath: 'result',
  filePrefix: 'resultado',
  baseUrl: 'http://35.194.32.72:30080',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./features/specs/**/*.ts',
              './pages/**/*.ts'
  ],
    tags: [],
    strict: true,
    format: ["progress"],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  onPrepare: function() {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
  }
};