'use strict';

angular.module('controllers', [])

.controller('ProjectsCtrl', function($scope){
	$scope.projects = [
		{id: 2, name:'Project 2', user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:1000},
		{id: 3, name:'Project 3', user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:700},
		{id: 4, name:'Project 4', user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:400}
	];
	$scope.selected = $scope.projects[0];

	$scope.$on('Created', function(){
		alert('New project created !');
	});
})
.controller('NewProjectCtrl', function($scope, $timeout){
	$scope.master = {};

	$scope.addProject = function(project){
		$scope.projects.push(project);
		$timeout( function () {$scope.$emit('Created')}, 500);
		$scope.reset();
	};

	$scope.reset = function(){
		$scope.project = angular.copy($scope.master);
	};
})
.controller('ProjectDetailsCtrl', function($scope, $routeParams){
	$scope.selectedId = $routeParams.id;
});