

var app = angular.module('RizApp', []);


app.controller('rizCtrl', function($scope) {

    $scope.choices = [];
  
    $scope.addNewChoice = function() {

    
    	
    	var newItemNo = $scope.choices.length;
        $scope.choices.push({'id':'choice'});
        
// $scope.choices.push({'id':''});

    
      

    };

    $scope.removeChoice = function(choice) {


   var index = $scope.choices.indexOf(choice);
   $scope.choices.splice(index,1);


    };

});
