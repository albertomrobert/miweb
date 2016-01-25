'use strict';

describe('Controller: RedesSocialesCtrl', function () {

  // load the controller's module
  beforeEach(module('miwebApp'));

  var RedesSocialesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RedesSocialesCtrl = $controller('RedesSocialesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RedesSocialesCtrl.awesomeThings.length).toBe(3);
  });
});
