comfortCaninesControllers.controller('ministryFormsController', ['$scope', '$modal', '$log',
	function($scope, $modal, $log) {
		//Used for the logins on all of the forms
		$scope.userInfo = {
			email: null,
			password: null
		};
		
		//Object to be created on the dog information form
		$scope.dogInfo = {
			name: "",
			breed: "",
			gender: "",
			hasBeenFixed: false,
			age: null,
			weight: null,
			colors: "",
			vetInfo: {
				name: "",
				address: "",
				phoneNumber: ""
			},
			healthIssues: {
				hasHealthIssues: false,
				explain: ""
			},
			vaccinationsUpToDate: null,
			preventativeMeds: {
				flea: false,
				tick: false,
				heartWorm: false,
				other: false,
				otherExplain: ""
			},
			certifications: "",
			experience: {
				children: "",
				publicSettings: "",
				specialNeeds: ""
			},
			otherDogs: {
				goodWithOtherDogs: false,
				explain: ""
			}
		};
		
		//FUNCTIONS BELOW
		$scope.dogInfoLogin = function() {
			//TODO: go fetch the list of dogs from the DB
			var dogs = ['dog 1', 'dog 2', 'dog 3'];
			
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'templates/forms/dogModal.html',
				controller: 'DogModalController',
				resolve: {
					items: function() {
						return dogs;
					}
				}
			});
			
			modalInstance.result.then(function(selectedItem){
				alert('User selected ' + selectedItem);
			},
			function() {
				$log.info('Modal window closed at ' + new Date());
			});
		}
	}
]);