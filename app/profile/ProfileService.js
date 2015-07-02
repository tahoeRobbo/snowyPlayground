var app = angular.module('snowyPlayground');

app.service('ProfileService', function($rootScope, $firebaseObject, FBURL){
	
	//**Changed all refs' to userRef and userObj
	
	this.addSummary = function(user) {
		console.log('service addStory Hit');
		var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var userObj = $firebaseObject(userRef);
		
		return userObj.$loaded(function(){
				userObj.summary = user.summary;
			userObj.$save();//after the fbObj is loaded, add new key/val
		
			
		});
	};// end this.addSummary
		
		this.addPic = function(user) {
			console.log('service addPic HIT');
			var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var userObj = $firebaseObject(userRef);
			
			userObj.$loaded(function() {
				var file = document.querySelector('input[type=file]').files[0];
				var reader = new FileReader();
				
				if(file) {
					console.log('if file, within service addPic');
					reader.readAsDataURL(file);
				}
				
				reader.onloadend = function() {
					userObj.picData = reader.result;
					userObj.$save();
				};

				
			});
			
			
		}; // end this.addPic
		

	
});//End Profile Service