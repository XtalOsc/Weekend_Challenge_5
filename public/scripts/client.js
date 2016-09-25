console.log('in client.js');
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/pet", {
        templateUrl: "/views/partials/pet.html",
        controller: "petController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
