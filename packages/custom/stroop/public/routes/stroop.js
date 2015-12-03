'use strict';

angular.module('mean.stroop').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('welcome', {
      url: '/stroop/welcome',
      templateUrl: 'stroop/views/index.html',
      controller: 'StroopController'
    });
    $stateProvider.state('basicinfo', {
      url: '/stroop/basicinfo',
      templateUrl: 'stroop/views/basicinfo.html',
      controller: 'StroopController'
    });
    $stateProvider.state('directions', {
      url: '/stroop/directions',
      templateUrl: 'stroop/views/directions.html',
      controller: 'StroopController'
    });
    $stateProvider.state('maintask', {
      url: '/stroop/maintask',
      templateUrl: 'stroop/views/maintask.html',
      controller: 'StroopController'
    });

  }
]);
