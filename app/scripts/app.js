angular.module('mongoose', ['ngRoute'])

.constant('version', 'v0.1.0')

.config(function($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeCtrl'
    })
    .when('/exp', {
      templateUrl: 'app/views/experiments.html',
      controller: 'expCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});

$(document).ready(function(){
  $(".collapse").collapse();
});