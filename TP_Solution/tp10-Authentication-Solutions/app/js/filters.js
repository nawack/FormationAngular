'use strict';

angular.module('filters', [])
.filter('categoryFilter', [function () {
    return function (projects, selectedCategory) {
        if (!angular.isUndefined(projects) && !angular.isUndefined(selectedCategory) && selectedCategory.length > 0) {
            var tempProjects = [];
            angular.forEach(projects, function (project) {
                if (angular.equals(project.category, selectedCategory)) {
                    tempProjects.push(project);
                }
            });
            return tempProjects;
        } else {
            return projects;
        }
    };
}])
.filter('progressFilter', [function () {
    return function (projects, selectedProgress) {
        if (!angular.isUndefined(projects) && !angular.isUndefined(selectedProgress) && !angular.equals(selectedProgress, 'all') && selectedProgress.length > 0) {
            var tempProjects = [];
            angular.forEach(projects, function (project) {
                if (angular.equals(selectedProgress, 'finished')) {
                    if (project.gifts >= project.goal) {
                    	tempProjects.push(project);
                    } 
                }
                if (angular.equals(selectedProgress, 'not-finished')) {
                    if (project.gifts < project.goal) {
                    	tempProjects.push(project);
                    } 
                }
            });
            return tempProjects;
        } else {
            return projects;
        }
    };
}])