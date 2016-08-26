const angular = require('angular');

var HelloAngular = angular.module('HelloAngular',[])
  .controller('HelloAngularController', function($scope){
    $scope.greeting = "Hello Angular";
  });
