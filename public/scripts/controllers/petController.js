myApp.controller("petController",["$scope","$http",function($scope,$http){
  console.log("in petController");
  $scope.pets = [];
  $scope.viewPets = function(){
    $http({
      method: 'Get',
      url: '/viewAll'
    }).then(function(response){
      console.log('returned from server ', response);
      $scope.pets = response.data;
    })//end return
  };//end function
  $scope.viewPets();

  $scope.deletePet = function(){
    $http({
      method: 'Delete',
      url: '/deletePet/'+ this.pet._id
    }).then(function(response){
      console.log('returned from server ', response);
      $scope.viewPets();
    })//end return
  };//end function
}]);//end petController
