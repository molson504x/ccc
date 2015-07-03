comfortCaninesControllers.controller('navController', ['$scope', '$location',
	function($scope, $location) {
		$scope.isActive = function(pathToValidate) {
			var pathParams = $location.path().split("/");
			
			return 	_.some(pathParams, pathToValidate);
		};
	}
]);