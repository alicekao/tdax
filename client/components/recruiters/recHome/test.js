describe('RecHomeController', function() {
  var scope;
  var createController;
  var httpBackend;
  var $state;

  beforeEach(module('evenhire'));
  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    createController = function() {
      return $controller('RecHomeController', {
        '$scope': scope,
        '$http': $httpBackend
      });
    };
    createController();
  }));


  it('should have a getJobs function', function() {
    expect(scope.getJobs).toBeDefined();
  });

})
