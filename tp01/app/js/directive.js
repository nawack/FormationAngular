/**
 * Created by Training on 26/11/2015.
 */
var myDirective = angular.module('myDirective', ['myServices']);

//myDirective.controller('myDirectiveController', );

myDirective.directive('myProjectDetail', function(myDataBaseFactory) {
    return {
        restrict: 'E',
        scope: {
            projectId: '=idProject'
        },
        templateUrl: 'partials/detail-project.html',
        controller: function($scope ) {
            $scope.$watch('projectId', function(newVal,oldVal) {
                //if (newVal != oldVal) {
                    console.log('PROJECT ID FOR DETAIL : ', newVal)
                    $scope.projectDetail = myDataBaseFactory.get({id:newVal},function(){
                });
                //}
            });
        }
    };
});