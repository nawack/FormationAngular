'use strict';

angular.module("services", ["ngResource"])
.factory('ProjectResource', function($resource){
      return $resource('/api/projects/:projectId',{projectId:'@_id'},
        { 'update': {method: 'PUT'} });
})
// constant could be replace by value here
.constant('categories', ['Web et techno', 'Games', 'Design']);
