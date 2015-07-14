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
		
	
			//CURRENT WORKING VERSION -- COMMENTING OUT FOR REF
		this.addPic = function() {
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
			});//end userObj.$loaded()
		}; // end this.addPic
	
/*	
//		THIS addPic adds to pics/username - figuring out how to embed ref
	this.addPic = function() {
		console.log('service addPic HIT');
		
		var picRef = new Firebase(FBURL + '/pics/' + $rootScope.currentUser.userName);
		var picObj = $firebaseObject(picRef);
		
		picObj.$loaded(function() {
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader();
			
			if(file) {
				console.log('there is a file within service addPic');
			reader.readAsDataURL(file);
			}	
			
			reader.onloadend = function() {
				picObj.picData = reader.result;
				picObj.$save();
			};
		});
	}; //end this.addPic*/
	
	
		
	this.newPic = function() {
			document.querySelector('input[type=file]').click();
					var file = document.querySelector('input[type=file]').files[0];
				var reader = new FileReader();
				var preview = document.querySelector('#preview');
				if(file) {
					console.log('if file, within service newPic');
					reader.readAsDataURL(file);
				}
				
				reader.onloadend = function() {
					preview.src = reader.result;
				};
	};//end this.newPic

	
	/*this.previewPic = function() {
		return function() {
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader();
			var preview = document.querySelector('#preview');
			
			if(file){
				reader.readAsDataURL(file);
			}
			reader.onloadend = function() {
				preview.src = reader.result;
			};
		};
	};//end this.previewPic*/
	
	this.addWhatDo = function(whatDo) {
		var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
		var userObj = $firebaseObject(userRef);
		
		userObj.$loaded(function() {
			$rootScope.currentUser.whatDo = whatDo;
			userObj.whatDo = whatDo;
			userObj.$save();
			console.log($rootScope.currentUser);
			
			console.log($rootScope.currentUser.whatDo + ' from Service');
		});
		
	};// end this.addWhatDo

	
});//End Profile Service