'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('NG Crowfundind App', function() {

  it('should redirect index.html to index.html#/main', function() {
    
    browser.get('');
    
    browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/main');
      });
  });

  it('should display the main projects', function() {

    var projectsList = element.all(by.repeater('project in projects'));
    expect(projectsList.count()).toBe(4);

  });


  describe('Projects list view', function() {

    beforeEach(function() {
      browser.get('/#/projects');
    });


    it('should display the projects list', function() {

      var projectsList = element.all(by.repeater('project in filtered'));
      console.log("Project count : "+projectsList.count());
      expect(projectsList.count()).toBeGreaterThan(9);

    });
  });

});
