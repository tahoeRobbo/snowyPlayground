var app = angular.module('snowyPlayground');

app.controller('CheckinCtrl', function($scope, MeetupService, $routeParams, FBURL, $location, $rootScope, $firebaseArray, $firebaseObject){
	
	
	//**CHECKINS***********************************************
	$scope.checkedInError = false;
	$scope.whichMountain = $routeParams.MOUNTAIN;
	$scope.whichZone = $routeParams.ZONE;
	
	var checkinRef = new Firebase(FBURL + 'mountains/' + $scope.whichMountain + '/zones/' + $scope.whichZone + '/checkins');
	
	var checkinsList = $firebaseArray(checkinRef);
	$scope.checkedInUsers = checkinsList;
	console.log($scope.checkedInUsers)
	
	$scope.addCheckin = function() {
		
		if($rootScope.currentUser.checkedIn === false) {
			
					var checkinObj = $firebaseArray(checkinRef);

		var myCheckinData = {
			firstName : $rootScope.currentUser.firstName,
			lastName : $rootScope.currentUser.lastName,
			userName : $rootScope.currentUser.userName,
			as : $scope.checkin.whatDo,
			checkedInAt : Firebase.ServerValue.TIMESTAMP
		};
		
		checkinObj.$add(myCheckinData).then(function() {
		var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var userObj = $firebaseObject(userRef);
		
		userObj.$loaded(function() {
			userObj.checkedIn = true;
			userObj.checkedInAs = $scope.checkin.whatDo;
			userObj.checkedInMountain = $scope.whichMountain;
			userObj.checkedInZone = $scope.whichZone;
			userObj.$save();
			$rootScope.currentUser = userObj;
			console.log($rootScope.currentUser);
			
			$location.path('/checkin/' + $scope.whichMountain + '/' + $scope.whichZone + '/checkinsList');
			

		});
		
		});//end checkinObj$add and then
			
		}// end if $rS.cU.checkedIn check
		
		$scope.checkedInError = true;

	};//end $scope.addCheckin
	
	$scope.checkout = function(checkin, key) {
		console.log(checkin, ' checkin from CheckinCtrl');
		if(checkin.userName === $rootScope.currentUser.userName) {
			console.log(checkin.$id , ' checkin.$id from within if');
		checkinsList.$remove(key);
			
					var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var userObj = $firebaseObject(userRef);
		
		userObj.$loaded(function() {
			userObj.checkedIn = false;
			userObj.checkedInAs = null;
			userObj.checkedInMountain = null;
			userObj.checkedInZone = null;
			userObj.$save();
			$rootScope.currentUser = userObj;
			console.log($rootScope.currentUser);
			
		});
			
		}// end userName check

		
	};//end $scope.checkout
		

});//end MeetupCtrl