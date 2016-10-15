(function(){
    var app = angular.module('RouteEx1', ["ngRoute"]);
    
    app.config(function($routeProvider) {
    $routeProvider
    .when("/allpersons", {
        templateUrl : "allpersons.html",
        controller: "PersonCtrl"
    })
    .when("/persondetail/:index", {
        templateUrl : "persondetail.html",
        controller: "PersonCtrl"
    })
    .when("/newperson", {
        templateUrl : "newperson.html",
        controller: "PersonCtrl"
    })
            .otherwise({
                redirectTo:"index.html"
    });
    
    });
    
    
    app.controller("PersonCtrl", [ '$scope' , '$routeParams', function($scope, $routeParams){
        $scope.allpersons = "All people";
        var uid = 4;
        var self = this;
        
        $scope.persons = [
        {id: 1, name: "Jens", age: 18},
        {id: 2, name: "Peter", age: 23},
        {id: 3, name: "Hanne", age: 23}
    ];
    
            self.save = function () {
                if (self.person.id === null) {
                    self.person.id = uid++;
                    self.persons.push(self.person);
                } else {
                    for (var i in self.persons) {
                        if (self.persons[i].id === self.person.id) {
                            self.persons[i] = self.person;
                        }
                    }
                }
                self.person = {};
            };
        
    
    if (angular.isDefined($routeParams.index)) {
    var i = $routeParams.index;
    $scope.person = $scope.persons[i];
  }
    
    
        
    }]);
    
    
    
})();

