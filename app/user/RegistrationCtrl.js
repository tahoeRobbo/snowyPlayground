var app = angular.module('snowyPlayground');

app.controller('RegistrationCtrl', function($scope, RegistrationService) {
	$scope.test = 'Hello World from the RegistrationCtrl';
	$scope.loginTest = "YO YO YO DIS BE DAT LOGIN VIEW BOIIIII";
	$scope.registrationTest = "MAN THIS SHIT FIN BE OFF DA CHAINS!";
	
	//REGISTER
	$scope.register = function() {
		console.log('RegistrationCtrl $scope.register Hit!');
		RegistrationService.registerUser($scope.user);
	};
});