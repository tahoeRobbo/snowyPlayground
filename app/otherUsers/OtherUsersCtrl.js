var app = angular.module('snowyPlayground');

app.controller('OtherUsersCtrl', function($scope, $firebaseArray, $location, FBURL, $routeParams) {

	var usersRef = new Firebase(FBURL + 'users/')
	var usersList = $firebaseArray(usersRef);
	
	usersList.$loaded(function() {
		console.log(usersList, ' uL from OUC');
		$scope.users = usersList;
	});// end load usersList and assing to $scope.users
	
	
	
	
	
});//end OtherUsersCtrl