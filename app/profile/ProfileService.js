var app = angular.module('snowyPlayground');

app.service('ProfileService', function($rootScope, $firebaseObject, FBURL){
	
	this.addSummary = function(user) {
		console.log('service addStory Hit');
		var storyRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var firebaseProfile = $firebaseObject(storyRef);
		
		firebaseProfile.$loaded(function(){
				firebaseProfile.summary = user.summary;
			firebaseProfile.$save();
});
			
	};
	
});//End Profile Service