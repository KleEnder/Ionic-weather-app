angular.module('weatherApp')
	.controller('SettingsController', function ($scope, Settings) {
		$scope.settings = Settings;
	});

