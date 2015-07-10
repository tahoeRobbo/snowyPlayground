var app = angular.module('snowyPlayground');

app.controller('ProfileCtrl', function($scope, ProfileService) {
	
	$scope.showEditProfile = false;
	
	$scope.editProfile = function() {
		$scope.showEditProfile = true;
	};
	
	$scope.doneEditProfile = function() {
		$scope.showEditProfile = false;
	}
	
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

