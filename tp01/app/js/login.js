/**
 * Created by Training on 27/11/2015.
 */
var myLogin = angular.module('myLogin', ['ngResource']);

myLogin.controller("myLoginController", function($scope, $location, myloginFactory, $rootScope) {

    $rootScope.userInfo = {};

    $scope.logMe = function () {
        // ATTENTION traitement asynchrone, donc a faire a la suite donc a inclure en paramêtre dans une fonction
        var user = myloginFactory.tryConnect({email:$scope.logInfo.login}, {password:$scope.logInfo.password}
            , function () {
                if (user.name) {
                    $rootScope.userInfo.name = user.name;
                    $rootScope.userInfo.role = user.role;
                    $rootScope.userInfo.provider = user.provider;
                    console.log('log OK : ', $scope.userInfo);
                    $location.path('/project');
                }
            }, function () {
                $scope.logInfo ={};
                $scope.logErr = 'Wrong User or Password';
            });
    };
});

myLogin.factory('myloginFactory', ['$resource', function($resource) {
    return $resource('/api/session', {email:'@email', password:'@password'},
        { 'tryConnect': {method: 'POST'} });
}]);


