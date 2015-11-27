/**
 * Created by Training on 25/11/2015.
 */
var myServices = angular.module('myServices', ['ngResource']);

myServices.service('myProjectServices', function () {
    var listProject = [
    {_id: 1, name:"project 1", mail:"user@mail.com", category: "Game", description: "bla bla bla bla", goal:1000 , gifts:500 },
    {_id: 2, name:"project 2", mail:"user@mail.com", category: "Web",  description: "bla bli bli bla", goal:8355 , gifts:8355},
    {_id: 3, name:"project 3", mail:"user@mail.com", category: "Design",  description: "bla blo bla blo", goal:8300 , gifts:1229}];

    this.getProjects = function () {
        return listProject;
    };

    this.getProjectById = function (id) {
        return _.find(listProject, function(project) {
            return project.id == id;
        });
    };

    this.addProject = function (project) {
        var lastProject = _.max(listProject, function(project) {
            return project.id;
        });
        project.id = lastProject.id + 1;
        project.gifts = 0;
        listProject.push(project);
    };

});

myServices.service('myCategorieServices', function () {
    var listCategorie = ["Web", "Games", "Design"];

    this.getListCategorie = function () {
        return listCategorie;
    };
});

myServices.factory('myDataBaseFactory', ['$resource', function($resource) {
   return $resource('/api/projects/:id', {id:'@_id'},
   { 'update': {method: 'PUT'} });
}]);


myServices.factory('authServicesFactory', [function() {
    var userToken = {
        isLogged: false,
        userName: '',
        userRole: '',
        userProvider:''
    }
    return userToken;
}]);