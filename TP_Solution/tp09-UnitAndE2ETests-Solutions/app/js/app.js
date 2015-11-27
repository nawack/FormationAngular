angular.module("myApp", ["controllers", "directives", "filters", "ngRoute"])
.config(function($routeProvider) {

	$routeProvider
	  .when('/main', {
	    templateUrl: 'partials/main.html',
	    controller: 'MainCtrl',
	  })
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
	    redirectTo: '/main'
	  });
});