/**
 * Created by Training on 25/11/2015.
 */
var myController = angular.module('myController', ['myServices', 'myDirective']);

myController.controller("projectCtrl", function($scope, /*myProjectServices,*/ myDataBaseFactory) {
    //$scope.myObject = myProjectServices.getProjects();
    $scope.myObject =  myDataBaseFactory.query();
    $scope.display = function (projectName) {alert(projectName)};
    $scope.removeProject = function (projectId) {

    };
});

myController.controller("projectCtrl2", function($scope, $location, myProjectServices, myCategorieServices, myDataBaseFactory) {
    $scope.project = new myDataBaseFactory();

    $scope.listCategorie = myCategorieServices.getListCategorie();

    $scope.addProject = function () {
        //myProjectServices.addProject($scope.project);
        $scope.project.date = new Date();
        $scope.project.gifts = 0;
        $scope.project.$save();
        $location.path('/project');
    };
});

myController.controller('projectCtrlDetail', function($scope, $location, $routeParams, myProjectServices, myDataBaseFactory){
    //$scope.selectedProject = myProjectServices.getProjectById($routeParams.id);

    $scope.paramId = $routeParams.id;

    $scope.selectedProject = myDataBaseFactory.get({id:$routeParams.id}, function() {
        $scope.avancement = $scope.selectedProject.gifts * 100 / $scope.selectedProject.goal;
    });

    $scope.doGift = function () {
        $scope.selectedProject.gifts += $scope.projectGift;
        $scope.avancement = $scope.selectedProject.gifts * 100 / $scope.selectedProject.goal;
        myDataBaseFactory.update({id:$routeParams.id}, $scope.selectedProject);
    };

    $scope.doDelete = function () {
        $scope.selectedProject.$delete();
    }

});