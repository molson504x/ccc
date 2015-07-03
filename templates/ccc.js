var comfortCanines = angular.module('comfortCanines', ['ngRoute', 'comfortCaninesControllers']);
var comfortCaninesControllers = angular.module('comfortCaninesControllers', []);

//CONFIG
comfortCanines.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/mission', {
			templateUrl: 'templates/mission.html',
			controller: 'missionController'
		})
		.otherwise({
			redirectTo: '/mission'
		});
}]);