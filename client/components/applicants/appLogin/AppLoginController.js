angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state','$http', function ($scope, $state, $http) {

    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
      console.log($scope.user);

    return $http({
          method: 'POST',
          url: '/api/applicants',
          data: $scope.user
            })
      .then(function (data) {
        console.log(data)
      });
    };
}]);
