var app = angular.module('snowyPlayground');

app.controller('ProfileCtrl', function($scope, ProfileService) {
	$scope.profileTest = "shiiit, you'll be able to let the world know right here!";
	
	$scope.toggleSavePic = false;
	$scope.addSummary = function() {
		console.log('$scope.addSummary HIT');
		ProfileService.addSummary($scope.user)
		.then(function() {
			$scope.user.summary = '';
		});
	}; // end $scope.addSummary
		
	$scope.newPic = function() {
		ProfileService.newPic();
		$scope.toggleSavePic = true;
	};//end $scope.newPic
	
/*	$scope.previewPic = function() {
		ProfileService.previewPic();
	}*/
	
	$scope.addPic = function() {
		console.log('$scope.addSummary HIT');
		ProfileService.addPic();
		$scope.toggleSavePic = false;
	};//end $scope.addPic
});//end ProfileCtrl

