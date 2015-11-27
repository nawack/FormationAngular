'use strict';

var myApp = angular.module('myApp', ['controllers', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/projects', {
		templateUrl : 'partials/list.html',
		controller : 'ProjectsCtrl'
	})
	.when('/newproject', {
		templateUrl: 'partials/form.html',
		controller: 'NewProjectCtrl'
	})
	.when('/project/:id', {
		templateUrl: 'partials/details.html',
		controller: 'ProjectDetailsCtrl'
	})
	.otherwise({
		redirectTo: '/projects'
	});
}]);


