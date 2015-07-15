var app = angular.module('snowyPlayground');

app.service('MeetupService', function(FBURL, $rootScope, $firebaseArray) {
	
	this.getMountains = function() {
		var mtnRef = new Firebase(FBURL + 'mountains/');
		var mountains = $firebaseArray(mtnRef);
	
		return mountains;
	
	};//end this.getMountains
	
	
	
});//end MeetupService