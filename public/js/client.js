//initialize angular module
angular.module('challengeApp', []);


//controller
angular.module('challengeApp').controller('MainController', function($scope, $http){


  //function upon clicking the button
  $scope.getNames = function(){
    //this retrieves /students from server and response.data is list of names

    
    $http.get('/students').then(function(response){
      // console.log(response.data);
      $scope.students = response.data;

    })
  }
})
