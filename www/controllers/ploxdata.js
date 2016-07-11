angular.module('weatherApp')
  .controller('PloxdataController', function ($scope) {
    
      $scope.options = {  
        chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: false,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          width: 320,
          title: "Api calls per day",
          donut: true,
          tooltips: false,
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
          key: "Angular",
          y: 18567
        },
        {
          key: "Backbone",
          y: 16651
        },
        {
          key: "Ember",
          y: 9023
        },
        {
          key: "Flight",
          y: 4655
        },
        {
          key: "Knockout",
          y: 4487
        },
        {
          key: "Marionette",
          y: 4261
        },
        {
          key: "React",
          y: 3691
        }
      ]; 
    })  