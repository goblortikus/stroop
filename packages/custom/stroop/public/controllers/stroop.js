'use strict';

/* jshint -W098 */
angular.module('mean.stroop').controller('StroopController', ['$scope', 'Global', 'Stroop', '$location',
  function($scope, Global, Stroop, $location) {
    $scope.global = Global;
    $scope.package = {
      name: 'stroop'
    };

    $scope.results = [];
    $scope.summaryResults = [];
    $scope.currentUserId = 1;
    $scope.currentUserAge = null;
    $scope.currentUserEducation = null;

    $scope.beginClick = function(){
        console.log('begin clicked');
        $location.path('/stroop/basicinfo');
    }

    $scope.goStroopDirections = function(){
        // validate age and education

        // if good then 
        console.log('go stroop directions');
        $location.path('/stroop/directions');
    }

  }
]);
