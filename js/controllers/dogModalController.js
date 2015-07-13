comfortCaninesControllers.controller('DogModalController', ['$scope', '$modalInstance', 'items', 
	function($scope, $modalInstance, items) {
		$scope.items = items;
		
		$scope.selected = {
			item: $scope.items[0]
		};
		
		$scope.dogSelected = function() {
			$modalInstance.close($scope.selected.item);
		};
		
		$scope.close = function() {
			$modalInstance.dismiss('cancel');
		};
	}
]);