angular.module('weatherApp')
	.controller('DifferentWeatherController', function ($scope, $http, $stateParams, Settings) {
		$scope.params = $stateParams;
		

		var loc = {lat: 46.05, lng: 14.51};

		$scope.getDifferentWeather = function() {
			$http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + $loc.lat +  '&lon=' + $loc.lng + '&appid=555d2db65137ecbbd820613da4006d3d' + '&units=metric').success(function (fiveday) {
				$scope.fiveday = fiveday;
			}).finally(function () { 
				$scope.$broadcast('scroll.refreshComplete');
 			});
 		};	

 		$scope.getDifferentWeather();



	});


	