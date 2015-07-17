var app = angular.module('snowyPlayground');

app.controller('MeetupCtrl', function($scope, MeetupService, mtnsFromRouter, $routeParams, FBURL, $location, $rootScope, $firebaseArray){
	
	
	$scope.test = "testing from the MeetupCtrl";	
	console.log(mtnsFromRouter, ' mtnsFromRouter logged from controller');
	$scope.mountains = mtnsFromRouter;
	$scope.heavenly = mtnsFromRouter.heavenly;
	$scope.kirkwood = mtnsFromRouter.kirkwood;
	
	console.log($scope.heavenly, ' SCOPE.HEAV FROM CTRL')

	console.log($scope.getAndStoreMountains)
	
	//**CHECKINS***********************************************
	
//	$scope.whichMountain = $routeParams.MOUNTAIN;
//	$scope.whichZone = $routeParams.ZONE;
//	
//	var checkinRef = new Firebase(FBURL + 'mountains/' + $scope.whichMountain + '/zones/' + $scope.whichZone + '/checkins');
//	
//	$scope.addCheckin = function() {
//		var checkinObj = $firebaseArray(checkinRef);
//
//		var myCheckinData = {
//			firstName : $rootScope.currentUser.firstName,
//			lastname : $rootScope.currentUser.lastName,
//			userName : $rootScope.currentUser.userName,
//			as : $scope.checkin.whatDo,
//			checkedInAt : Firebase.ServerValue.TIMESTAMP
//		};
//		
//		checkinObj.$add(myCheckinData).then(function() {
//			$location.path('/checkins/' + $scope.whichMountain + '/' + $scope.whichZone + '/checkinsList');
//		});
//		
//	};//end $scope.addCheckin
		

});//end MeetupCtrl