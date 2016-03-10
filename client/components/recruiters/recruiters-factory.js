angular.module('evenhire.recruiters.factory', [])
  .factory('Recruiter', ['$http', function($http) {
    var recruiter = {};

    recruiter.signup = function(newUser) {
      return $http({
        method: 'POST',
        url: 'api/recruiters/signup',
        data: newUser
      })
      .then(function(data){
        return data.data;
      }, function(err) {
        console.log("Error: ", err);
      });
    };

    recruiter.login = function(user){
      return $http({
        method: 'POST',
        url: 'api/recruiters/login',
        data: user
      })
      .then(function(data){
        return data.data;
      }, function(err) {
        return err;
      });
    };

    recruiter.getPostedJobs = function(id) {
      return $http({
        method: 'GET',
        url: 'api/recruiters/allPostedJobs/' + id,
      })
      .then(function(data) {
        //data.data is an array of job objects
        console.log(data.data);
        return data.data;
      }, function(err) {
        console.log('error in getting all posted jobs');
      });
    }

    recruiter.postNewJob = function(newJobObj) {
      return $http({
        method: 'POST',
        url: 'api/recruiters/newJob',
        data: newJobObj
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        return err;
      });
    }

    return recruiter;
  }])
