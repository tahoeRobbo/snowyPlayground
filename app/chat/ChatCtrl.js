var app = angular.module('snowyPlayground');

app.controller('ChatCtrl', function($scope, ChatService, FBURL, $firebaseArray) {
	
	var ref = new Firebase(FBURL + '/messages');
	var fbMessages = $firebaseArray(ref);
	$scope.messages=fbMessages;
	
	console.log($scope.messages);
	$scope.addMessage = function() {
		ChatService.addMessage($scope.message)
		.then(function() {
			$scope.message = '';
		});//end 
	};//end $scope.addMessage
	


});//end ChatCtrl

