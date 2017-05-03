// configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [{
	  'browserName': 'firefox'
  }, {
	  'browserName': 'chrome'
  }],
  
  framework: 'jasmine',

  specs: ['./test/*spec.js'],

};
