var app = angular.module('snowyPlayground');

app.controller('MeetupCtrl', function($scope, MeetupService, mtnsFromRouter){
	
	$scope.test = "testing from the MeetupCtrl";	
	console.log(mtnsFromRouter, ' mtnsFromRouter logged from controller');
	$scope.heavenly = mtnsFromRouter.heavenly;
	$scope.kirkwood = mtnsFromRouter.kirkwood;
	
	console.log($scope.heavenly, ' SCOPE.HEAV FROM CTRL')

	console.log($scope.getAndStoreMountains)
	

		

});//end MeetupCtrl