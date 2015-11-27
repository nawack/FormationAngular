/**
 * Created by Training on 26/11/2015.
 */
describe ('Test Unitaire', function() {

    beforeEach(module('myApp'));

    var $httpBackend,
        $controller;


    beforeEach(inject(function(_$httpBackend_, _$controller_){
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;

        $httpBackend.expectGET('/api/projects').
            respond([
                {_id: 1, name:"project 1", mail:"user@mail.com", category: "Game", description: "bla bla bla bla", goal:1000 , gifts:500 },
                {_id: 2, name:"project 2", mail:"user@mail.com", category: "Web",  description: "bla bli bli bla", goal:8355 , gifts:8355},
                {_id: 3, name:"project 3", mail:"user@mail.com", category: "Design",  description: "bla blo bla blo", goal:8300 , gifts:1229}]);

        $httpBackend.expectGET('/api/projects/1234').
            respond({_id: 1234, name:"project 1", mail:"user@mail.com", category: "Game", description: "bla bla bla bla", goal:1000 , gifts:500 });

    }));

    describe ('Test des controllers', function() {

        it('Test de récupétation de donnée', function() {
            var $scope = {};
            $controller('projectCtrl', { $scope: $scope} );
            $httpBackend.flush();
            console.log($scope);
            expect($scope.myObject.length).toEqual(3);
        });

        it('Test de récupétation des categories', function() {
            var $scope = {};
            $controller('projectCtrl2', { $scope: $scope} );
            expect($scope.listCategorie).toEqual(["Web", "Games", "Design"]);
        });
    });

    describe ('controller des filtres', function() {
        var $filter;

        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
        }));

        it('Test du filtre Capitalize', function() {
            var capitalize = $filter('capitalize');
            var textBefore = 'un deux trois';
            var textAfter = 'Un Deux Trois';
            expect(capitalize(textBefore)).toEqual(textAfter);
        });
    });

    describe ('controller des describes', function() {
        var $compile,
            $rootScope;

        beforeEach(inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('Test du describe detail', function() {
            var element = $compile("<my-project-detail id-project=\"1234\"></my-project-detail>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();
            expect('titi').toEqual('toto');
        });
    });
});