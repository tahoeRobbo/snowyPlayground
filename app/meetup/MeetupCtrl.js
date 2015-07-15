var app = angular.module('snowyPlayground');

app.controller('MeetupCtrl', function($scope, MeetupService){
	
	$scope.test = "testing from the MeetupCtrl";
	
	$scope.mountains = MeetupService.getMountains();
		
	// end $scope.mountains
});//end MeetupCtrl