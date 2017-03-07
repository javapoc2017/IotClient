'use strict';

/**
 * @ngdoc service
 * @name iotClientApp.serviceCalls
 * @description
 * # serviceCalls
 * Service in the iotClientApp.
 */
angular.module('iotClientApp')
  .service('serviceCalls', function ($q,$rootScope,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };

    this.registration=function (userObject){
    	var differed=$q.defer();

    	$http.post($rootScope.URL+'/registerUser',userObject,config)
    .then(function(response) {
        console.log("registration service success");

        differed.resolve(response);
    }).catch(function(response){

    	differed.reject(response);
    });
    return differed.promise;

    };

    this.login=function (userObject){
    	var differed=$q.defer();

    	$http.post($rootScope.URL+'/login',userObject,config)
    .then(function(response) {
        console.log("login service success");

        differed.resolve(response);
    }).catch(function(response){

    	differed.reject(response);
    });
    return differed.promise;

    };



  });
