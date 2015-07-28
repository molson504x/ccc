var comfortCanines = angular.module('comfortCanines', ['ngRoute', 'comfortCaninesControllers']);
var comfortCaninesControllers = angular.module('comfortCaninesControllers', ['ui.bootstrap', 'angular-md5']);

//CONFIG
comfortCanines.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/mission', {
			templateUrl: 'templates/mission.html',
			controller: 'missionController'
		})
		.when('/about', {
			templateUrl: 'templates/aboutUs.html',
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
			templateUrl: 'templates/forms/main.html',
			controller: 'ministryFormsController'
		})
		.when('/ministry/forms/volunteer', {
			templateUrl: 'templates/forms/volunteer.html',
			controller: 'volunteerInfoController'
		})
		.when('/ministry/forms/addDog', {
			templateUrl: 'templates/forms/addDog.html',
			controller: 'dogInfoController'
		})
		.when('/ministry/partners', {
			templateUrl: 'templates/construction.html',
			controller: 'ministryPartnersController'
		})
		.when('/contact', {
			templateUrl: 'templates/construction.html',
			controller: 'contactController'
		})
		.otherwise({
			redirectTo: '/mission'
		});
}]);