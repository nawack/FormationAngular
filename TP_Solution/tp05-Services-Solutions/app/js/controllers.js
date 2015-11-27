'use strict';

angular.module('controllers', ['services'])
.controller('ProjectsCtrl', function($scope, ProjectServices){
	$scope.projects = ProjectServices.getProjects();	
})
.controller('NewProjectCtrl', function($scope, $location, ProjectServices, Categories){

	$scope.master = {};
	$scope.categories = Categories;

	$scope.addProject = function(project){
		project.date = new Date();
		project.gifts = 0;
		ProjectServices.addProject(project);
		$scope.reset();
		$location.path('/projects');
	};

	$scope.reset = function(){
		$scope.project = angular.copy($scope.master);
	};
})
.controller('ProjectDetailsCtrl', function($scope, $routeParams, ProjectServices){
	$scope.selected = ProjectServices.getProjectById($routeParams.id);

	$scope.makeAGift = function(){
		ProjectServices.give($routeParams.id, $scope.giftAmount);
	};
});