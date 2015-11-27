'use strict';

angular.module('services', [])
.service('ProjectServices', function(){

	var projects = [
		{id: 2, name:'Project 2', category:"Web", user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:1000, gifts:0},
		{id: 3, name:'Project 3', category:"Games", user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:700, gifts:0},
		{id: 4, name:'Project 4', category:"Design", user:'pierre@mail.com', description:'Ceci est une description de mon projet', goal:400, gifts:0}
	];
	
	this.getProjects = function() {
		return projects;
	};

	this.getProjectById = function(id) {
		return _.find(projects, function(project) {
            return project.id == id;
        });
	};

	this.give = function(projectid, amount) {
		var luckyproject = this.getProjectById(projectid);
        luckyproject.gifts += amount;
	};

	this.addProject= function(project){
		var lastProject = _.max(projects, function(elt){
			return elt.id;
		});

		project.id = lastProject.id + 1;
		project.gifts = 0;
		projects.push(project);
	};
})
// constant could be replace by value here
.constant('Categories', ['Web et techno', 'Games', 'Design']);