comfortCaninesControllers.controller('ministryFormsController', ['$scope',
	function($scope) {
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
			vaccinationsUpToDate: false,
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
	}
]);