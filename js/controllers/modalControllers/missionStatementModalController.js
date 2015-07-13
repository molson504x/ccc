comfortCaninesControllers.controller('MissionStatementModalController', ['$scope', '$modalInstance', 
	function($scope, $modalInstance) {		
		$scope.closeModal = function() {
			$modalInstance.dismiss('cancel');
		};
	}
]);