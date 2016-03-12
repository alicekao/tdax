angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', 'Recruiter', function ($scope, $state, Recruiter) {
  $scope.newJob = {};
  $scope.postedJobs = '';
  $scope.error;

  $scope.getJobs = function() {
    Recruiter.getPostedJobs()
      .then(function(data) {
      $scope.postedJobs = data;

    }, function() {
      $scope.error = 'unable to get jobs';
    });
  };

  $scope.postJob = function() {
    Recruiter.postNewJob($scope.newJob)
      .then(function(newJob) {
        console.log(newJob)
      });
  };

  $scope.getApplicants = function(jobId) {
    console.log('jobId: ', jobId);
    Recruiter.grabApplicants(jobId)
      .then(function(data) {
        $scope.JobApplicant = data;
      }, function() {
        $scope.error = 'Unable to get applicants';
      });
  };

}]);
