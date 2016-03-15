
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant','$mdDialog','ngDialog', function ($scope, $state, Applicant, $mdDialog, ngDialog) {
    $scope.fetchedJobs = [];


  // $scope.clickToOpen = function () {
  //   ngDialog.open({
  //     template: '../../components/recruiters/recHome/tabDialog.tmpl.html',
  //     controller: 'AllJobsController',
  //     className: 'ngdialog-theme-default'
  //   });
  // };
  // $scope.closeDialog = function () {
  //   ngDialog.close();
  // };

    $scope.getAllJobs = function() {
      Applicant.allJobs()
        .then(function(data) {
          console.log(data);
          $scope.fetchedJobs = data;
        });
    }();

    $scope.submitApplication = function(job_id) {
      Applicant.apply({job_id: job_id})
        .then(function(factoryResponse) {
          console.log("factoryResponse in alljobsController", factoryResponse);
          if(factoryResponse.status === 500){
            console.log("You need to login");
            $state.go('appLogin')
          } else if(factoryResponse.toString() === 'false') { 
            alert("You already applied for that job")
          } else if(!factoryResponse) {
            alert("You need to be logged in as an applicant to apply for a job")
          } else {
            alert("Thanks for applying " + factoryResponse.first_name)
          }
      });
    };
}]);
