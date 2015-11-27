/**
 * Created by Training on 24/11/2015.
 */

var myApp = angular.module('myApp', ['myController', 'ngRoute', 'myLogin']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/project', {
            templateUrl: 'partials/list.html',
            controller: 'projectCtrl',
            isLogin: true
        })
        .when ('/newproject', {
            templateUrl: 'partials/form.html',
            controller: 'projectCtrl2',
            isLogin: true
        })
        .when ('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'projectCtrlDetail',
            isLogin: true
        })
        .when ('/login', {
            templateUrl: 'partials/login.html',
            controller: 'myLoginController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);

myApp.run(function ($rootScope, $location, authServicesFactory) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        userToken = new authServicesFactory();
        userToken.get();
        if (!userToken.isLogged && !next.isLogin) {
            $rootScope.savedLocation = $location.url();
            $location.path('/login');
        }
    });
})

myApp.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});


