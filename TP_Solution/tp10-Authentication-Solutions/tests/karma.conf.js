module.exports = function(config){
  config.set({

    basePath : '../',

        preprocessors: {
             'app/partials/**/*.html': ['ng-html2js']
         },

         ngHtml2JsPreprocessor: {
             // setting this option will create only a single module that contains templates
             // from all the files, so you can load them all with module('foo')
             moduleName: 'templates'
         },

    files : [
      'app/lib/angular.min.js',
      'app/lib/angular-mocks.js',
      'app/lib/angular-route.min.js',
      'app/lib/angular-resource.min.js',
      'app/lib/underscore-min.js',
      'app/js/**/*.js',
      'tests/unit/**/*.js',
      'app/partials/**/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'], //,'Firefox','Safari'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};