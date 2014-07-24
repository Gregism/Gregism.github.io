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
    .when('/music', {
      templateUrl: 'app/views/music.html',
      controller: 'musicCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});

$(document).ready(function(){
  $(".collapse").collapse();
});