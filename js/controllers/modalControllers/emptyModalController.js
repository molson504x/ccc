comfortCaninesControllers.controller('EmptyModalController', ['$scope', '$modalInstance', 
	function($scope, $modalInstance) {		
		$scope.closeModal = function() {
			$modalInstance.dismiss('cancel');
		};
	}
]);