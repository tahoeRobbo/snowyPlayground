var app = angular.module('snowyPlayground');

app.service('MeetupService', function(FBURL, $rootScope, $firebaseArray, $firebaseObject, $q) {
	var dfd = $q.defer()
	this.heavenly;
	this.kirkwood;
	
	this.getMountains = function() {
		var dfd = $q.defer();
		var mtnRef = new Firebase(FBURL + 'mountains/');
		var mountains = $firebaseArray(mtnRef);
		var mountainsObj = {};
		var mountainSnapshot;
		
		mountains.$loaded().then(function() {
			angular.forEach(mountains, function(mountain) {
				if(mountain.name === 'heavenly') { mountainsObj.heavenly = mountain;}
				if(mountain.name === 'kirkwood') { mountainsObj.kirkwood = mountain;}
	
			})//end forEach loop inside $loaded
			console.log(mountainsObj, " from before return inside $loaded")
			dfd.resolve(mountainsObj);
			return this.mountainsObj;
		});// end AND THEN functions
//for(var i = 0; i < mountains.length; i++) {
//			if(mountains[i].name === 'heavenly') {
//				mountainsObj.heavenly = mountains[i];
//			}
//			if(mountains[i].name === 'kirkwood') {
//				mountainsObj.kirkwood = mountains[i];
//			}
//		}//end for loop this.getMountains

		return dfd.promise;
	};//end this.getMountains
	
	
	
});//end MeetupService