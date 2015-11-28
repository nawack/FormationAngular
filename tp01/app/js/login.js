/**
 * Created by Training on 27/11/2015.
 */
var myLogin = angular.module('myLogin', ['ngResource', 'myServices']);

myLogin.controller("myLoginController", function($scope, $location, myloginFactory, authServicesFactory) {
    $scope.logMe = function () {
        // ATTENTION traitement asynchrone, donc a faire a la suite donc a inclure en paramêtre dans une fonction
        var user = myloginFactory.tryConnect({email:$scope.logInfo.login}, {password:$scope.logInfo.password}
            , function () {
                if (user.name) {
                    authServicesFactory.userName = user.name;
                    authServicesFactory.userRole = user.role;
                    authServicesFactory.userProvider = user.provider;
                    authServicesFactory.isLogged = true;
                    console.log('auth ok : ', authServicesFactory);
                    $scope.$emit('evtLogIn', authServicesFactory);

                    $location.path('/project');
                }
            }, function () {
                $scope.logErr = 'Wrong User or Password';
            });
    };
});

myLogin.factory('myloginFactory', ['$resource', function($resource) {
    return $resource('/api/session', {email:'@email', password:'@password'},
        { 'tryConnect': {method: 'POST'} });
}]);


