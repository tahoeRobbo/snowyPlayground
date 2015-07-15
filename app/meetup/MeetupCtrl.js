var app = angular.module('snowyPlayground');

app.controller('MeetupCtrl', function($scope, MeetupService){
	
	$scope.test = "testing from the MeetupCtrl";
	
	$scope.getAndStoreMountains = MeetupService.getMountains();
	
	$scope.getAndStoreMountains.$loaded().then(function() {
		$scope.heavenly = MeetupService.mountainsObj.heavenly;
		$scope.kirkwood = MeetupService.mountainsObj.kirkwood;
	})



	console.log($scope.getAndStoreMountains)
	

		

});//end MeetupCtrl