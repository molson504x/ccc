comfortCaninesControllers.controller('dogInfoController', ['$scope', '$modal', '$log', 'md5', '$http', '$location',
	function($scope, $modal, $log, md5, $http, $location) {
		//Used for the logins on all of the forms
		$scope.userInfo = {
			email: null,
			password: null
		};
		
		//Object to be created on the dog information form
		$scope.dogInfo = {
			dogId: "",
			volunteerId: null,
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
				city: "",
				state: "",
				zip: "",
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
		
		$scope.showDogForm = false;
		
		//FUNCTIONS BELOW
		$scope.dogInfoLogin = function() {
			var userInfo = {
				email: $scope.userInfo.email,
				password: md5.createHash($scope.userInfo.password || '')
			};
			
			var volunteerId = '';
			
			debugger;
			
			$http({
				method: 'POST',
				url: comfortCaninesCommon.ApiBase + 'volunteer/getId',
				data: userInfo
			}).success(function(data, status) {
				if (data.Success == true) {
					volunteerId = data.Data;
					$scope._dogModalShow(volunteerId);
				}
				else {
					var alertMessage = "An error occurred while handling your request.  Please try again.";
					if (data.Errors != null)
						alertMessage += "\n" + data.Error[0];
					alert(alertMessage);
				}					
			}).error(function(data, success) {
				var alertMessage = "An error occurred while handling your request.  Please try again.";
				if (data.Error != null)
					alertMessage += "\n" + data.Errors[0];
					
				alert(alertMessage);
			});	
		};
		
		$scope._dogModalShow = function(volunteerId) {		
			$http.get(comfortCaninesCommon.ApiBase + 'dog/' + volunteerId)
			.success(function(data, status) {
				if (data.Success == true) {
					$scope._showDogSelectionModal(data.Data);
				}
				else {
					$scope.dogInfo.volunterId = volunteerId;
					$scope.showDogForm = true;
					alert('We were unable to find a dog for your account.  Please add a new dog using the form.');
				}
			}).error(function(data, status) {
				var alertMessage = "An error occurred while handling your request.  Please try again.";
				alert(alertMessage);
			});
		};
		
		$scope._showDogSelectionModal = function(dogInfo) {
			var modalInstance = $modal.open({
				animation:true,
				templateUrl: 'templates/forms/dogModal.html',
				controller: 'DogModalController',
				resolve: {
					items: function() {
						return dogInfo;
					}
				}
			});
			
			modalInstance.result.then(function(selectedItem) {
				$scope.dogInfo = selectedItem;
			},
			function() {
				$log.info('Modal window closed at ' + new Date());
			});
		};
		
		$scope.dogInfoSubmit = function() {
			$http.put(
				comfortCaninesCommon.ApiBase + 'dog/',
				$scope.dogInfo
			).success(function(data, status) {
				if (data.Success) {
					alert("Your dog has been successfully submitted.");
					$location.path('/ministry/forms');
				}
				else { //data.success = false
					var alertMessage = "An error has occurred while handling your request.  Please try again.";
					if (data.Errors != null) 
						alertMessage += "\n" + data.Errors[0];
					
					alert(alertMessage);
				}
			}).error(function(data, status) {
				var alertMessage = "An error has occurred while handling your request.  Please try again.";
				alert(alertMessage);
			});
		};
	}
]);