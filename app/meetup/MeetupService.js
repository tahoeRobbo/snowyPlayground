var app = angular.module('snowyPlayground');

app.service('MeetupService', function(FBURL, $rootScope, $firebaseArray, $firebaseObject, $q) {
	var dfd = $q.defer()
	this.heavenly;
	this.kirkwood;
	
	this.getMountains = function() {
		var mtnRef = new Firebase(FBURL + 'mountains/');
		var mountains = $firebaseArray(mtnRef);
		var mountainsObj = {};
		var mountainSnapshot;
		console.log('11111', mountains);
		
		mountains.$loaded().then(function() {
			angular.forEach(mountains, function(mountain) {
				console.log(mountain);
				if(mountain.name === 'heavenly') { mountainsObj.heavenly = mountain};
				if(mountain.name === 'kirkwood') { mountainsObj.kirkwood = mountain};
				console.log(mountainsObj, 'from mountains.loaded')
			})
		});
//for(var i = 0; i < mountains.length; i++) {
//			if(mountains[i].name === 'heavenly') {
//				mountainsObj.heavenly = mountains[i];
//			}
//			if(mountains[i].name === 'kirkwood') {
//				mountainsObj.kirkwood = mountains[i];
//			}
//		}//end for loop this.getMountains
			return this.mountainsObj;
	};//end this.getMountains
	
	
	
});//end MeetupService