angular.module("myApp", ["controllers", "ngRoute"])
.config(function($routeProvider) {

	$routeProvider
	  .when('/projects', {
	    templateUrl: 'partials/list.html',
	    controller: 'ProjectsCtrl',
	  })
	  .when('/project/:id', {
	    templateUrl: 'partials/details.html',
	    controller: 'ProjectDetailsCtrl',
	  })
	  .when('/newproject', {
	    templateUrl: 'partials/form.html',
	    controller: 'NewProjectCtrl',
	  })
	  .otherwise({
	    redirectTo: '/projects'
	  });
});