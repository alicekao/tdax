
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', function ($scope, $state, Applicant) {
    $scope.fetchedJobs = [];

    $scope.getAllJobs = function() {
      Applicant.allJobs()
        .then(function(data) {
          $scope.fetchedJobs = data;
          console.log('data in alljobsController is', data);
        });
    };

    $scope.submitApplication = function(job_id) {
      console.log('in submitApplication')


      Applicant.apply({job_id: job_id})
        .then(function(factoryResponse) {
          console.log("factoryResponse in alljobsController", factoryResponse);
          if(factoryResponse.status === 500){
            console.log("You need to login");
            $state.go('appLogin')
          }
          else if(!factoryResponse) {
            alert("You already applied for that job")
          } else {
            alert("Thanks for applying " + factoryResponse.first_name)
          }
      });
    };
}]);