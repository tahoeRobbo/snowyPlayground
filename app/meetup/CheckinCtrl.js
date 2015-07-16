var app = angular.module('snowyPlayground');

app.controller('CheckinCtrl', function($scope, MeetupService, $routeParams, FBURL, $location, $rootScope, $firebaseArray){
	
	
	//**CHECKINS***********************************************
	
	$scope.whichMountain = $routeParams.MOUNTAIN;
	$scope.whichZone = $routeParams.ZONE;
	
	var checkinRef = new Firebase(FBURL + 'mountains/' + $scope.whichMountain + '/zones/' + $scope.whichZone + '/checkins');
	
	var checkinsList = $firebaseArray(checkinRef);
	$scope.checkedInUsers = checkinsList;
	console.log($scope.checkedInUsers)
	
	$scope.addCheckin = function() {
		var checkinObj = $firebaseArray(checkinRef);

		var myCheckinData = {
			firstName : $rootScope.currentUser.firstName,
			lastName : $rootScope.currentUser.lastName,
			userName : $rootScope.currentUser.userName,
			as : $scope.checkin.whatDo,
			checkedInAt : Firebase.ServerValue.TIMESTAMP
		};
		
		checkinObj.$add(myCheckinData).then(function() {
			$location.path('/checkin/' + $scope.whichMountain + '/' + $scope.whichZone + '/checkinsList');
		});
		
	};//end $scope.addCheckin
	
	$scope.checkout = function(checkedInUser, key) {
		console.log(checkedInUser, ' checkin from CheckinCtrl');
//		if(checkin.userName === $rootScope.currentUser.userName) {
//			console.log(checkin.$id , ' checkin.$id from within if');
//			var record = $firebaseArray(checkinRef);
//			console.log(record, ' record from within the if')
//			record.$remove(checkin.$id);
//		}// end userName check
		
		var record = $firebaseArray(checkinRef);
			console.log(record, ' record from within the if')
			record.$remove(key);
		
	};//end $scope.checkout
		

});//end MeetupCtrl