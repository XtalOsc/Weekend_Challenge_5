myApp.controller("addController",['$scope', '$http',function($scope,$http){
  console.log("in addController");
  var myApp = angular.module('myApp', []);
  $scope.addNewPet = function(){

    var newPet ={
      pet_name: $scope.petName,
      pet_species: $scope.petSpecies,
      age: $scope.petAge,
      url: $scope.url
    };//end newPet object
    $http({
      method: 'POST',
      url: '/addPet',
      data: newPet

    }).then(function(response){
      console.log('returned from server ', response);
    });
  };//end addNewPet
}]);//end addController
