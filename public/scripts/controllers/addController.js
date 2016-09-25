myApp.controller("addController",['$scope', '$http',function($scope,$http){
  console.log("in addController");
  $scope.addNewPet = function(){
    //add new pet object
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
      //empty input fields
      $scope.petName="";
      $scope.petSpecies="";
      $scope.petAge="";
      $scope.url="";
    })//end return
  };//end addNewPet
}]);//end addController
