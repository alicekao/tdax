angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', 'Recruiter', 'Auth','$mdDialog','ngDialog', function ($scope, $state, Recruiter, Auth, $mdDialog, ngDialog) {
  $scope.newJob = {};
  $scope.JobApplicant = {};
  $scope.error;
  $scope.contactMessage = '';
  $scope.clickToOpen = function () {
    ngDialog.open({
      template: './components/recruiters/recHome/newJobDialog.tmpl.html',
      controller: 'RecHomeController',
      className: 'ngdialog-theme-default'
    });
  };
  $scope.closeDialog = function () {
    ngDialog.close();
  };

  $scope.clickToOpenContact = function (applicantIndex, jobIndex) {
    console.log('applicants:', $scope.JobApplicant)
    console.log('job:', $scope.postedJobs[results])
    $scope.applicantToContact = $scope.JobApplicant[$scope.postedJobs[results][jobIndex]][applicantIndex];
    $scope.jobToContactAbout = $scope.postedJobs[results][jobIndex];
    ngDialog.open({
      template: './components/recruiters/recHome/contactDialog.tmpl.html',
      controller: 'RecHomeController',
      className: 'ngdialog-theme-default'
    });
  };

  var currentUser = Auth.getCurrentUser();
  $scope.companyName = currentUser.name;
  $scope.companyEmail = currentUser.email;
  $scope.getApplicants = function(jobId) {
    Recruiter.grabApplicants(jobId)
      .then(function(data) {
        console.log(data);
        $scope.JobApplicant[jobId] = data;
      }, function() {
        $scope.error = 'Unable to get applicants';
      });
  };

  $scope.getJobs = function() {
    Recruiter.getPostedJobs()
      .then(function(data) {
      //sorting jobs by most recent, so need to reverse count array to match
      data.applicantCount.reverse();
      $scope.postedJobs = data;
    }, function() {
      $scope.error = 'unable to get jobs';
    });
  }();

  $scope.postJob = function() {
    Recruiter.postNewJob($scope.newJob)
      .then(function(newJob) {
        $state.go('recruiters');
        console.log('new job is', newJob);
      })
  };

  $scope.sendEmail = function(applicantEmail, jobTitle) {
    console.log(applicantEmail, jobTitle);
    // Recruiter.sendEmail(applicantEmail, jobTitle, $scope.companyName, $scope.companyEmail, $scope.contactMessage)
    //   .then(function(response) {
    //     alert(response.message);
    //   });
  };

}]);
