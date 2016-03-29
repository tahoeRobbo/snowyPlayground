angular.module('snowyPlayground')
  .controller('CheckinCtrl', CheckinCtrl)


CheckinCtrl.$inject = ['$scope', 'MeetupService', '$routeParams', 'FBURL', '$location', '$rootScope', '$firebaseArray', '$firebaseObject', 'CheckFactory'];

function CheckinCtrl($scope, MeetupService, $routeParams, FBURL, $location, $rootScope, $firebaseArray, $firebaseObject, CheckFactory){
	
	
	//**CHECKINS***********************************************
	$scope.checkedInError = false;
	$scope.whichMountain = $routeParams.MOUNTAIN;
	$scope.whichZone = $routeParams.ZONE;
	
	var checkinRef = new Firebase(FBURL + 'mountains/' + $scope.whichMountain + '/zones/' + $scope.whichZone + '/checkins');
	
	var mountainZoneRef = new Firebase(FBURL + 'mountains/' + $scope.whichMountain);
	var mountainObject = $firebaseObject(mountainZoneRef);
	
	mountainObject.$loaded(function() {
    console.log(mountainObject, 'mtnObj CheckCtrl');
		$scope.currentMountain = mountainObject.name;
    console.log(mountainObject.name, 'below');
		$scope.currentZone = mountainObject.zones[$scope.whichZone].name;
    
	});
	
	
	var checkinsList = $firebaseArray(checkinRef);
	$scope.checkedInUsers = checkinsList;

	
	/////ADD CHECKIN////////
  
  $scope.addCheckin = function(){
    console.log($rootScope, 'rs From CheckinCtrl');
    CheckFactory.addCheckIn($scope.checkin, $scope.currentMountain, $scope.currentZone);
  };
//	$scope.addCheckin = function() {
//		
//		if(!$rootScope.currentUser.checkedIn) {
//			
//					var checkinObj = $firebaseArray(checkinRef);
//			
//			if(!$scope.checkin.doinWhat){$scope.checkin.doinWhat = null;}
//
//		var myCheckinData = {
//			firstName : $rootScope.currentUser.firstName,
//			lastName : $rootScope.currentUser.lastName,
//			userName : $rootScope.currentUser.userName,
//			as : $scope.checkin.whatDo,
//			asSpecific : $scope.checkin.doinWhat,
//			checkedInAt : Firebase.ServerValue.TIMESTAMP,
//			id : $rootScope.currentUser.uid,
//			mountain : $scope.whichMountain,
//			zone : $scope.whichZone
//		};
//		
//		checkinObj.$add(myCheckinData).then(function(data) {
//			var howMany = checkinsList.length;
//
//		var userRef = new Firebase(FBURL + 'users/' + $rootScope.currentUser.uid);
//		var userObj = $firebaseObject(userRef);
//		
//		userObj.$loaded(function() {
//			userObj.checkedIn = true;
//			userObj.checkedInAs = $scope.checkin.whatDo;
//			userObj.checkedInAsSpecific = $scope.checkin.doinWhat;
//			userObj.checkedInMountain = $scope.whichMountain;
//			userObj.checkedInZone = $scope.whichZone;
//			userObj.checkedInKey = data.key();
//			userObj.checkedInMountainHuman = $scope.currentMountain;
//			userObj.checkedInZoneHuman = $scope.currentZone;
//			userObj.$save();
//			$rootScope.currentUser = userObj;
//			console.log($rootScope.currentUser);
//			
//			$location.path('/checkin/' + $scope.whichMountain + '/' + $scope.whichZone + '/checkinsList');
//			
//
//		});
//		
//		});//end checkinObj$add and then
//			
//		}// end if $rS.cU.checkedIn check
//		
//		$scope.checkedInError = true;
//
//	};//end $scope.addCheckin
	
//	$scope.checkout = function(checkin) {
//		console.log(checkin, ' checkin from CheckinCtrl');
//			console.log(checkin.$id , ' checkin.$id from within if');
//			
//			console.log(checkinsList.$indexFor(checkin), " 111");
//			console.log(checkinsList.$indexFor($rootScope.currentUser.checkedInKey), " 222");
//		checkinsList.$remove(checkinsList.$indexFor(checkin));
//			//checkinsList.$remove(key);
//			
//					var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
//		var userObj = $firebaseObject(userRef);
//		
//		userObj.$loaded(function() {
//			userObj.checkedIn = false;
//			userObj.checkedInAs = null;
//			userObj.checkedInMountain = null;
//			userObj.checkedInMountainHuman = null;
//			userObj.checkedInZone = null;
//			userObj.checkedInZoneHuman = null;
//			userObj.checkedInKey = null;
//			userObj.$save();
//			$rootScope.currentUser = userObj;
//			console.log($rootScope.currentUser);
//			
//		});
//			
//	
//
//		
//	};//end $scope.checkout
		

}//end MeetupCtrl