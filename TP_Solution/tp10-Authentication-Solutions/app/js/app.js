angular.module("myApp", ["controllers", "directives", "filters", "ngRoute"])
.config(function($routeProvider) {

	$routeProvider
	  .when('/main', {
	    templateUrl: 'partials/main.html',
	    controller: 'MainCtrl',
	    access: {isFree: true}
	  })
	  .when('/login', {
	    templateUrl: 'partials/login.html',
	    controller: 'LoginCtrl',
	    access: {isFree: true}
	  })
	  .when('/projects', {
	    templateUrl: 'partials/list.html',
	    controller: 'ProjectsCtrl',
	    access: {isFree: true}
	  })
	  .when('/project/:id', {
	    templateUrl: 'partials/details.html',
	    controller: 'ProjectDetailsCtrl',
	    access: {isFree: false}
	  })
	  .when('/newproject', {
	    templateUrl: 'partials/form.html',
	    controller: 'NewProjectCtrl',
	    access: {isFree: false}
	  })
	  .otherwise({
	    redirectTo: '/main'
	  });

})
.run(function ($rootScope, $location) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next && !next.access.isFree && !$rootScope.currentUser) {
        $location.path('/login');
      }
    });
  });
;