
angular.module('weatherApp')
	.controller('SeekController', function ($scope, $http) {
		$scope.model = {term: ''};

		$scope.seek = function() {
			$http.get('https://maps.googleapis.com/maps/api/geocode/json', 
				{params: {address: $scope.model.term}}).success(function (response) {
					$scope.results = response.results;
				});
		};
	});




