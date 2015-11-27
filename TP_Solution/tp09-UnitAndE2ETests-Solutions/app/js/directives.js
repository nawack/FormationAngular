angular.module("directives", [])
.directive("card", function() {
	return {
      restrict: 'E',
      scope: {project: '=info'},
      templateUrl: '../partials/card.html'
    };
});