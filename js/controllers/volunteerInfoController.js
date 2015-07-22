comfortCaninesControllers.controller('volunteerInfoController', ['$scope', '$modal', '$log', '$http', 'md5',
	function($scope, $modal, $log, $http, md5) {
		$scope.userInfo = {
			email: "",
			password: ""
		};
		
		$scope.volunteerInfo = {
			volunteerId: null,
			acceptedChrist: {
				accepted: null,
				explain: ""
			},
			doctrinalStatement: {
				accepted: null,
				explain: ""
			},
			missionAndVisionStatements: {
				accepted: null,
				explain: ""
			},
			name: "",
			homeAddress: {
				street: "",
				city: "",
				state: "",
				zip: null
			},
			mailingAddress: {
				isSame: true,
				street: "",
				city: "",
				state: "",
				zip: null
			},
			gender: "",
			maritalStatus: {
				isMarried: null,
				spouseName: "",
				discussedWithSpouse: null,
				spouseThoughts: ""
			},
			children: {
				hasChildren: null,
				details: ""
			},
			phoneNumber: {
				home: "",
				cell: "",
				other: ""
			},
			email: "",
			password: "",
			church: {
				isAffiliated: null,
				nameOfChurch: "",
				address: {
					street: "",
					city: "",
					state: "",
					zip: null,
					phoneNumber: ""
				},
				personToContact: ""
			},
			emergencyContact: {
				provided: null,
				name: "",
				address: {
					street: "",
					city: "",
					state: "",
					zip: null
				},
				relationship: "",
				phoneNumber: {
					primary: "",
					secondary: ""
				}
			},
			criminalRecord: {
				convicted: null,
				explain: ""
			},
			backgroundCheck: {
				consent: null,
				explain: ""
			},
			anyOtherInfo: "",
			experience: "",
			activitiesInterest: {
				admin: null,
				fundraising: null,
				training: null,
				handling: null,
				care: null,
				foster: null,
				other: {
					other: false,
					explain: ""	
				}
			},
			hasADog: null
		}
		
		$scope.showMissionAndVisionStatements = function() {
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: '/templates/forms/missionStatementModal.html',
				controller: 'EmptyModalController',
				size: 'lg',
			});
			
			$scope.volunteerInfo.missionAndVisionStatements.accepted = null;
		};
		
		$scope.getUserInfo = function() {
			//TODO: make the request to the api to get the user's info...
			
			//TODO: set $scope.volunteerInfo to the returned object
		}
		
		$scope.submitUserInfo = function() {
			var userInfo = $scope.volunteerInfo;
			userInfo.password = md5.createHash($scope.volunteerInfo.password || '');
			
			var requestMethod = 'PUT';
			if (userInfo.volunteerId != null)
				requestMethod = 'POST';
				
			$http({
				method: requestMethod,
				url: comfortCaninesCommon.ApiBase + 'volunteer',
				data: userInfo
			}).success(function(data, status) {
				debugger;
			}).error(function(data, status) {
				debugger;
			})
		}
	}
]);