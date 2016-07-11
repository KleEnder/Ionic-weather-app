// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('weatherApp', ['ionic', 'nvd3'])
  
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('seek', {
        url: '/seek',
        controller: 'SeekController',
        templateUrl: 'views/seek.html'
      })

      .state('ploxdata', {
        url: '/ploxdata',
        controller: 'PloxdataController',
        templateUrl: 'views/ploxdata.html'
      })

      .state('weather', {
        url: '/weather/:city/:lat/:lng',
        controller: 'WeatherController',
        templateUrl: 'views/weather.html'
      });

      $urlRouterProvider.otherwise('/seek');
  })    

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default 
      // (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .controller('PloxdataController', function ($scope) {
    
    $scope.options = {  

      chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.key;},
          y: function(d){return d.calls;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.001,
          labelSunbeamLayout: false,
          width: 320,
          title: "Api calls per day",
          donut: true,
          tooltips: true,
            legend: {
              margin: {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
              }
            }
          }
    };

    $scope.data = [  
      {
        key: "Forecastio",
        calls: 1000
      },

      {
        key: "Openweathermap",
        calls: 86400
      },
      {
        key: "Wunderground",
        calls: 500
      }
    ];  
  })  

  .filter('fahrenheit', function() {
      return function(celsius) {
          var farenheit = Math.fround(celsius * 1.8 + 32);
          return farenheit.toFixed(4) + '°F';
      };
  });

  
