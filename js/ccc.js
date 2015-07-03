var comfortCanines = angular.module('comfortCanines', ['ngRoute', 'comfortCaninesControllers']);
var comfortCaninesControllers = angular.module('comfortCaninesControllers', []);

//CONFIG
comfortCanines.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/mission', {
			templateUrl: 'templates/mission.html',
			controller: 'missionController'
		})
		.when('/about', {
			templateUrl: 'templates/construction.html',
			controller: 'aboutController'
		})
		.when('/dogs', {
			templateUrl: 'templates/construction.html',
			controller: 'dogsController'
		})
		.when('/dogs/:dogId', {
			template: 'templates/construction.html',
			controller: 'dogsController'
		})
		.when('/media', {
			templateUrl: 'templates/construction.html',
			controller: 'mediaController'
		})
		.when('/ministry/forms', {
			templateUrl: 'templates/construction.html',
			controller: 'ministryFormsController'
		})
		.when('/ministry/partners', {
			templateUrl: 'templates/construction.html',
			controller: 'ministryPartnersController'
		})
		.otherwise({
			redirectTo: '/mission'
		});
}]);