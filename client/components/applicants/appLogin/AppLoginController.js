angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state', function ($scope, $state) {

    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);
