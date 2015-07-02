var app = angular.module('snowyPlayground');

app.service('RegistrationService', function($rootScope, $firebaseObject, $firebaseAuth, FBURL){
	
	var ref = new Firebase(FBURL);
	var auth = $firebaseAuth(ref);
	
	
	this.loginUser = function(user) {
		console.log('RegistrationCtrl this.loginUser HIT');
		return auth.$authWithPassword({
			email : user.email,
			password : user.password
		});
	};//End this.loginUser
	
	
	this.registerUser = function(user) {
		console.log('RegistrationService this.registerUser Hit')
		return auth.$createUser({
			email : user.email,
			password : user.password
		}).then(function(regUser){
			var userRef = new Firebase(FBURL + '/users/' + regUser.uid);
			var firebaseUsers = $firebaseObject(userRef);
			
			firebaseUsers.date = Firebase.ServerValue.TIMESTAMP;
			firebaseUsers.uid = regUser.uid;
			firebaseUsers.firstName = user.firstName;
			firebaseUsers.lastName = user.lastName;
			firebaseUsers.name = user.firstName + " " + user.lastName;
			firebaseUsers.email = user.email;
			firebaseUsers.userName = user.userName;
			
			firebaseUsers.$save();
			
		}); //end adding user info into firebase (AND THEN)
	};// End this.registerUser
	
	auth.$onAuth(function(authUser){
		if(authUser) {
			var onRef = new Firebase(FBURL + "/users/" + authUser.uid);
			var userData = $firebaseObject(onRef);
			userData.$loaded().then(function(fullUser) {
				$rootScope.currentUser = fullUser;
				console.log("Logged in as ", $rootScope.currentUser);
			});//If logging in, return full user from firebase and assign it to $rS.cU
		} else {
			$rootScope.currentUser = '';
			console.log("Logged Out");
		}// If loggin out, clear $rootScope.currentUser
	}); // end auth.$onAuth

	this.logoutUser = function() {
		return auth.$unauth();
	}; // end this.logout
	
});// End RegistrationService