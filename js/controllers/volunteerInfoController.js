comfortCaninesControllers.controller('volunteerInfoController', ['$scope', '$modal', '$log',
	function($scope, $modal, $log) {
		$scope.volunteerInfo = {
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
				provided: true,
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
				consentToPay: null,
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
				other: ""
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
	}
]);