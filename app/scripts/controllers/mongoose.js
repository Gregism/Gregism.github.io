'use strict';

angular.module('mongoose')
  .controller('mongooseCtrl', function ($scope) {
    $scope.sectionInfo = {
      title: ""
    }
    
    $scope.search = {};
  });
