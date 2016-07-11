angular.module('weatherApp')
	.controller('WeatherController', 
		function ($scope, $http, $stateParams, $ionicActionSheet, $ionicModal) {

		$scope.params = $stateParams;
		var angles = [ "N", "NNE" , "NE", "ENE", "E", "ESE", "SE", 
		"SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

		$scope.getIconUrl = function(icon) {
	      return 'http://openweathermap.org/img/w/' + icon + '.png';
	    };

		$scope.getWeather = function() {
			$http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + $stateParams.lat +  
				'&lon=' + $stateParams.lng + '&appid=555d2db65137ecbbd820613da4006d3d' + 
				'&units=metric').success(function (forecast) {
				$scope.forecast = forecast;
			}).finally(function () { 
				$scope.$broadcast('scroll.refreshComplete');
 			});
 		};	

 		$scope.getWeather();

 		$scope.getDirection = function(degree) {
		    if (degree > 338) {
		      degree = 360 - degree;
		    }
		    var angle = Math.round((degree + 22) / 45);
		    return angles[angle];
		};

		$scope.showOptions = function() {
			var sheet = $ionicActionSheet.show({
				buttons: [
					{text: 'Daily Forecast'},
					{text: '12 Hour Longer Forecast'},
					{text: 'Current Conditions in Fahrenheit'},
					{text: 'Daily Forecast in Fahrenheit'},
					{text: '12 Hour Longer Forecast in Fahrenheit'}
				],
				cancelText: 'Cancel',
				buttonClicked: function (id) {
					if (id === 0) {
						$scope.showModal();
					}
					if (id === 1) {
						$scope.showModal2();
					}
					if (id === 2) {
						$scope.showModal3();
					}
					if (id === 3) {
						$scope.showModal4();
					}
					if (id === 4) {
						$scope.showModal5();
					}
					return true;
				}
			});
		};

		$scope.showModal = function() {
			if ($scope.modal) {
				$scope.modal.show();
			} else {
				$ionicModal.fromTemplateUrl('views/modal-chart1.html', {
					scope: $scope
				}).then(function (modal) {
					$scope.modal = modal;
					$scope.modal.show();
				});
			}
		};
		
		$scope.hideModal = function() {
			$scope.modal.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});


		$scope.showModal2 = function() {
			if ($scope.modal2) {
				$scope.modal2.show();
			} else {
				$ionicModal.fromTemplateUrl('views/modal-chart2.html', {
					scope: $scope
				}).then(function (modal2) {
					$scope.modal2 = modal2;
					$scope.modal2.show();
				});
			}
		};
		
		$scope.hideModal2 = function() {
			$scope.modal2.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal2.remove();
		});

		$scope.showModal3 = function() {
			if ($scope.modal3) {
				$scope.modal3.show();
			} else {
				$ionicModal.fromTemplateUrl('views/modal-chart3.html', {
					scope: $scope
				}).then(function (modal3) {
					$scope.modal3 = modal3;
					$scope.modal3.show();
				});
			}
		};
		
		$scope.hideModal3 = function() {
			$scope.modal3.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal3.remove();
		});


		$scope.showModal4 = function() {
			if ($scope.modal4) {
				$scope.modal4.show();
			} else {
				$ionicModal.fromTemplateUrl('views/modal-chart4.html', {
					scope: $scope
				}).then(function (modal4) {
					$scope.modal4 = modal4;
					$scope.modal4.show();
				});
			}
		};
		
		$scope.hideModal4 = function() {
			$scope.modal4.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal4.remove();
		});


		$scope.showModal5 = function() {
			if ($scope.modal5) {
				$scope.modal5.show();
			} else {
				$ionicModal.fromTemplateUrl('views/modal-chart5.html', {
					scope: $scope
				}).then(function (modal5) {
					$scope.modal5 = modal5;
					$scope.modal5.show();
				});
			}
		};
		
		$scope.hideModal5 = function() {
			$scope.modal5.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal5.remove();
		});

	});


	