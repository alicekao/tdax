angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state','$http','Applicant','$window', 'Auth', 'Home', function ($scope, $state, $http, Applicant, $window, Auth, Home) {

    $scope.applicant = {};
    $scope.states = Home.states;

    $scope.createAccount = function() {
      //Checking if passwords match
      if($scope.applicant.verify_password === $scope.applicant.password) {
        //send form data to the server at api/applicant/signUp
        Auth.signUp($scope.applicant, 'applicant')
        .then(function(data) {
          if (!data.type) {
            console.log('User already exists', data.data);
          } else {
            $window.localStorage.setItem('evenhire', data.token);
            console.log('NEW USER is :', data);
            $state.go('allJobs');
          }
        });
      } else {
        //Alerting user their passwords don't match
        alert("Your passwords don't match!");
      };
    };

  }]);

