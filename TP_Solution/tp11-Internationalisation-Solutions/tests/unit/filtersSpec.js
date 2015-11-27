'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  var categoryFilter, progressFilter;

  beforeEach(module('filters'));
  
  // load filter function into variable
  beforeEach(inject(function ($filter) {
    categoryFilter = $filter('categoryFilter');
    progressFilter = $filter('progressFilter');
  }));

  // add angular equality to jasmine equality tester
  beforeEach(function(){
    jasmine.addCustomEqualityTester(function(first, second){
      return angular.equals(first, second);
    });
  });

  describe('filter by category', function() {

    it('should filter by category name', inject(function() {
      
      var projects = [{name:"project1",category:"Web"},{name:"project1",category:"Web"},{name:"project1",category:"Design"}];
      expect(categoryFilter(projects,'')).toEqual([{name:"project1",category:"Web"},{name:"project1",category:"Web"},{name:"project1",category:"Design"}]);
      expect(categoryFilter(projects,'Web')).toEqual([{name:"project1",category:"Web"},{name:"project1",category:"Web"}]);
      expect(categoryFilter(projects,'Design')).toEqual([{name:"project1",category:"Design"}]);
    }));

    it('should filter by progress', inject(function() {
      
      var projects = [{name:"project1",gifts:100, goal:100},{name:"project1",gifts:20, goal:100},{name:"project1",gifts:50, goal:100}];
      expect(progressFilter(projects,'all')).toEqual([{name:"project1",gifts:100, goal:100},{name:"project1",gifts:20, goal:100},{name:"project1",gifts:50, goal:100}]);
      expect(progressFilter(projects,'finished')).toEqual([{name:"project1",gifts:100, goal:100}]);
      expect(progressFilter(projects,'not-finished')).toEqual([{name:"project1",gifts:20, goal:100},{name:"project1",gifts:50, goal:100}]);
    }));
  });
});
