/**
 * Created by Training on 24/11/2015.
 */

var myApp = angular.module('myApp', ['myController', 'ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/project', {
        templateUrl: 'partials/list.html',
        controller: 'projectCtrl'
        })
        .when ('/newproject', {
        templateUrl: 'partials/form.html',
        controller: 'projectCtrl2'
        })
        .when ('/detail/:id', {
        templateUrl: 'partials/detail.html',
        controller: 'projectCtrlDetail'
    })
        .otherwise({
            redirectTo: '/project'
        });
}]);

myApp.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});

