'use strict';

describe('Controller: MongoosectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('gregismgithubioApp'));

  var MongoosectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MongoosectrlCtrl = $controller('MongoosectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
