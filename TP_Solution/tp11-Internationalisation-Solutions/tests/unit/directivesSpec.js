'use strict';

/* jasmine specs for controllers go here */
describe('NG Crowfunding controllers', function() {

  beforeEach(module('myApp'));
  beforeEach(module('directives'));
  beforeEach(module('templates'));

  describe('Card directive', function(){
    var $compile;
    var $scope;

    beforeEach(inject(function(_$compile_, _$rootScope_,$templateCache) {
         $compile = _$compile_;
         $scope = _$rootScope_.$new();
         $templateCache.put('../partials/card.html', $templateCache.get('app/partials/card.html'));
       }));


    it("should render the header and text as passed in by $scope", inject(function() {
             
       // $compile the template, and pass in the $scope.
       // This will find your directive and run everything
       var template = $compile("<card info=\"project\"/> ")($scope);

       // Set some values on your $scope
       var project = {
          name:"Project1",
          description:"Ceci est un project",
          goal:"5000",
          gifts:"1000",
          date:""
       };

       $scope.project = project;

       // Now run a $digest cycle to update your template with new data
       $scope.$digest();

       // Render the template as a string
       var templateAsHtml = template.html();

       // Verify that the $scope variables are in the template
       expect(templateAsHtml).toContain($scope.project.name);
       expect(templateAsHtml).toContain($scope.project.description);
       expect(templateAsHtml).toContain('<div class="thumbnail">');
       expect(templateAsHtml).toContain('20% Complete');

    }));

  });
});
