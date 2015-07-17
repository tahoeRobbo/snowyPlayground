var app = angular.module('snowyPlayground');

app.controller('OtherUsersProfileCtrl', function($scope, $firebaseObject, FBURL, $routeParams){
	
	$scope.otherUser = $routeParams.uId;
	
	console.log($scope.otherUser);
	
	var otherUserProfileRef = new Firebase(FBURL + /users/ + $scope.otherUser);
	
	var otherUserProfileObj = $firebaseObject(otherUserProfileRef);
	
	otherUserProfileObj.$loaded(function(){
		console.log(otherUserProfileObj, 'oUPO from OUPC');
		$scope.otherUser = otherUserProfileObj;
	});
	
	
});//end OtherUsersProfileCtrl