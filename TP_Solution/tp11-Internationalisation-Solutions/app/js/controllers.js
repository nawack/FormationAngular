'use strict';

angular.module("controllers", ["services"])
.controller("MainCtrl", function($scope, ProjectResource) {
	$scope.projects = ProjectResource.query();
})
.controller('NavbarCtrl', function($scope, $translate, ProjectResource) {
	$scope.changeLanguage = function (key) {
        $translate.use(key);
    }
})
.controller('LoginCtrl', function($scope, UserService, $rootScope,$location) {

    $scope.login = function() {
    	UserService.save({
          email: $scope.user.email,
          password: $scope.user.password
        }, function(user) {
          $rootScope.currentUser = user;
          $location.path("/projects");
        }, function(err) {
          $scope.errors = "Unable to login";
        })
    	
    }
})
.controller("ProjectsCtrl", function($scope, categories, ProjectResource) {
	$scope.projects = ProjectResource.query();
	$scope.categories = categories;


	$scope.selectedCategory = '';
	$scope.selectedProgress = 'all';

	$scope.setSelectedCategory = function(categoryName) {
		$scope.selectedCategory = categoryName;
	};

	$scope.setSelectedProgress = function(progress) {
		$scope.selectedProgress = progress;
	};

})
.controller("NewProjectCtrl", function($scope, $location, ProjectResource, categories){
	$scope.project = new ProjectResource();
	$scope.categories = categories;

	$scope.addProject = function() {
		$scope.project.date = new Date();
		$scope.project.gifts = 0;
		$scope.project.$save();
		$location.path('/projects');
	};
})
.controller("ProjectDetailsCtrl", function($scope, ProjectResource, $routeParams) {
	ProjectResource.get({projectId:$routeParams.id}, function(project) {
	    $scope.project = project;
	});

	$scope.makeAGift = function() {
		var project = $scope.project;
		$scope.project.gifts += $scope.giftAmount;
		project.$update();
	};
});