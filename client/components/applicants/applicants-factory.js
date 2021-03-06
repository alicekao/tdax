angular.module('evenhire.applicants.factory', [])

  .factory('Applicant',['$http', '$window', '$state', 'Auth', function($http, $window, $state, Auth) {
    var applicant = {};

    applicant.allJobs = function() {
      return $http({
        method: 'GET',
        url: 'api/applicant/allJobs'
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        return err;
      });
    };

    applicant.apply = function(applicationObject) {
      return $http({
        method: 'POST',
        url: 'api/applicant/apply',
        data: applicationObject
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        return err;
      });
    };

    applicant.closeDialog = function() {
      ngDialog.close();
    };

    return applicant;
  }])
