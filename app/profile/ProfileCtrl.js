var app = angular.module('snowyPlayground');

app.controller('ProfileCtrl', function($scope, ProfileService) {
	$scope.profileTest = "shiiit, you'll be able to let the world know right here!";
	
	$scope.addSummary = function() {
		console.log('$scope.addSummary HIT');
		ProfileService.addSummary($scope.user);
	};
});