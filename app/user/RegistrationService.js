var app = angular.module('snowyPlayground');

app.service('RegistrationService', function($rootScope, $firebaseObject, $firebaseAuth, FBURL){
	
	var ref = new Firebase(FBURL);
	var auth = $firebaseAuth(ref);
	
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
			
			firebaseUsers.$save();
		}); //end adding user info into firebase (AND THEN)
	};// End this.registerUser
});// End RegistrationService