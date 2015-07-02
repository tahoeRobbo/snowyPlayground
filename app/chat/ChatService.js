var app = angular.module('snowyPlayground');

app.service('ChatService', function($firebaseArray, $rootScope, FBURL) {
	
		var ref = new Firebase(FBURL + '/messages');
		var fbMessages = $firebaseArray(ref);
		
	
	this.addMessage = function(message){
		return fbMessages.$add({
			message : message.text,
			user : $rootScope.currentUser.userName,
			userPic : $rootScope.currentUser.picData
		});
	};

	
});//end ChatService