'use strict';

/**
 * @ngdoc overview
 * @name iotClientApp
 * @description
 * # iotClientApp
 *
 * Main module of the application.
 */
angular
  .module('iotClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'

  ])
  .config(function ($locationProvider,$stateProvider, $urlRouterProvider) {

    
    $locationProvider.hashPrefix('');
     $urlRouterProvider.otherwise('/signin');
      $stateProvider.state('signin', {
              url: '/signin',
              templateUrl: 'views/signin.html' ,
              controller:'SigninCtrl'
              
            
                   
        }).state('dashboard', {
              url: '/dashboard',
              templateUrl: 'views/dashboard.html' ,
              controller:'dashboardCtrl',
              
          
          
        }).state('register', {
              url: '/register',
              templateUrl: 'views/registration.html' ,
              controller:'RegistrationCtrl',
              
          
        });
        
  }).run(function ($rootScope,$http) {
    $rootScope.URL='http://localhost:8080/v1/iot/customer';
    // $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // Send this header only in post requests. Specifies you are sending a JSON object
 // $http.defaults.headers.post['dataType'] = 'json';
  });
