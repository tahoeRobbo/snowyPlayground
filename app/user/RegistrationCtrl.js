var app = angular.module('snowyPlayground');

app.controller('RegistrationCtrl', function($scope, RegistrationService, $location) {
	
	//LOGIN
	$scope.login = function() {
		console.log('RegistrationCtrl $scope.login HIT');
		RegistrationService.loginUser($scope.user);
		$location.path('/profile');
	};
	
	//REGISTER
	$scope.register = function() {
		console.log('RegistrationCtrl $scope.register Hit!');
		RegistrationService.registerUser($scope.user)
		//Register User
		.then(function() {
			RegistrationService.loginUser($scope.user);
			$location.path('/profile');
		})// AND THEN login
			.catch(function(error){
			$scope.message = error.message;
		});// error catch
	}; // End $scope.register
	
	//LOGOUT
	$scope.logout = function() {
		console.log('RegistrationCtrl $scope.logout HIT!');
		RegistrationService.logoutUser();
		$location.path('/login');
	};//End $scope.logout
});