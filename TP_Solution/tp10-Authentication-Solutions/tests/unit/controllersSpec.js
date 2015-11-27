'use strict';

/* jasmine specs for controllers go here */
describe('NG Crowfunding controllers', function() {

  beforeEach(module('myApp'));
  beforeEach(module('services'));

  // add angular equality to jasmine equality tester
  beforeEach(function(){
    jasmine.addCustomEqualityTester(function(first, second){
      return angular.equals(first, second);
    });
  });

  describe('MainCtrl', function(){
      var scope, ctrl, $httpBackend;

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/projects').
            respond([
              {name:"project1",category:"Web"},
              {name:"project1",category:"Web"},
              {name:"project1",category:"Design"}]);

        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {$scope: scope});
      }));


      it('should display 3 projects fetched from xhr', function() {
        expect(scope.projects).toEqual([]);

        $httpBackend.flush();

        expect(scope.projects).toEqual([
              {name:"project1",category:"Web"},
              {name:"project1",category:"Web"},
              {name:"project1",category:"Design"}]);
      });
    });

  describe('ProjectsCtrl', function(){
      var scope, ctrl, $httpBackend;

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/projects').respond([
              {name:"project1",category:"Web"},
              {name:"project1",category:"Web"},
              {name:"project1",category:"Design"}
        ]);

        scope = $rootScope.$new();
        ctrl = $controller('ProjectsCtrl', {$scope: scope});
      }));


      it('should display 3 projects fetched from xhr', function() {
        expect(scope.projects).toEqual([]);
        
        $httpBackend.flush();

        expect(scope.projects).toEqual([
          {name:"project1",category:"Web"},
          {name:"project1",category:"Web"},
          {name:"project1",category:"Design"}]);
      });


      it('should set the default value of selected categories and progress', function() {
        expect(scope.selectedCategory).toBe('');
        expect(scope.selectedProgress).toBe('all');
      });

      it('should be aware of selected category/progress change', function() {
        scope.setSelectedCategory('Web');
        scope.setSelectedProgress('Finished');

        expect(scope.selectedCategory).toBe('Web');
        expect(scope.selectedProgress).toBe('Finished');
      });
   });
  describe('ProjectDetailsCtrl', function(){
      var scope, ctrl, $httpBackend;

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET('/api/projects/1').respond({name:"project1",category:"Web"});

        var routeParams = {};
        routeParams.id=1;
        scope = $rootScope.$new();
        ctrl = $controller('ProjectDetailsCtrl', {$scope: scope,$routeParams: routeParams});
      }));


      it('should display the project fetched from xhr', function() {
      
        $httpBackend.flush();

        expect(scope.project).toEqual({name:"project1",category:"Web"});
      });
   });
});
