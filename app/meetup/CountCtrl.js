var app = angular.module('snowyPlayground');

app.controller('CountCtrl', function($scope, MeetupService, $routeParams, FBURL, $location, $rootScope, $firebaseArray, $firebaseObject){
	
	$scope.howManyActive = function(mountain, zoneKey) {
		var checkinRef = new Firebase(FBURL + 'mountains/' + mountain + '/zones/' + zoneKey + '/checkins');

		var checkinsList = $firebaseArray(checkinRef);
	 checkinsList.$loaded(function() {

		$scope.checkedInNumber = checkinsList.length;

		 checkinsList.$watch(function(event) {
			 if(event) {
				 $scope.howManyActive(mountain, zoneKey);
			 }
		 });//end watch **When someone checkouts out (ie an item is removed from the array) re-check and re-store 
		 //$scope.checkedInNumber based on new state
		 
	 });

	};//end howManyActive
	
});//end CountCtrl
	