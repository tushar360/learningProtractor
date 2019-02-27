var baseDir=__dirname
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    directConnect: 'true',
    specs: './src/main/specifications/*.js',
	framework: 'jasmine3',
	jasmineNodeOpts: {
    showColors: true,
        defaultTimeoutInterval: 360000,// Use colors in the command line report.
  },
  capabilities: {
    browserName: 'chrome',
	},
  logLevel:"ERROR",
  baseUrl:"http://juliemr.github.io/protractor-demo/",
  onPrepare :  () =>{
      jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
              displayStacktrace: true
          },
          summary: {
              displayDuration: true
          }})),
  browser.waitForAngularEnabled(false);
  browser.get("");

  },
  onComplete: () =>{
	  console.log('Complete')
  },
  onCleanUp: () =>{
	  console.log('Clean Up')
  },
  afterLaunch: () =>{
	  console.log('After launch')
  },
 params: {
	 dir : baseDir
 }
};
