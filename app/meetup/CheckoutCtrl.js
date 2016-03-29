'use strict';

(function(){
    angular.module('snowyPlayground')

    .controller('CheckoutCtrl', CheckoutCtrl);


    CheckoutCtrl.$inject = ['$scope', 'MeetupService', '$routeParams', 'FBURL', '$location', '$rootScope', '$firebaseArray', '$firebaseObject'];
    function CheckoutCtrl($scope, MeetupService, $routeParams, FBURL, $location, $rootScope, $firebaseArray, $firebaseObject){
	
		$scope.checkout = function(checkin) {
			
            var checkinRef = new Firebase(FBURL + 'mountains/' + $rootScope.currentUser.checkedInMountain + '/zones/' + $rootScope.currentUser.checkedInZone + '/checkins');
	
            var checkinsList = $firebaseArray(checkinRef);
			
            checkinsList.$loaded(function(){

                checkinsList.$remove(checkinsList.$indexFor(checkin)).then(function() {

                var userRef = new Firebase(FBURL + '/users/' + $rootScope.currentUser.uid);
                var userObj = $firebaseObject(userRef);

                    userObj.$loaded(function() {
                        userObj.checkedIn = false;
                        userObj.checkedInAs = null;
                        userObj.checkedInMountain = null;
                        userObj.checkedInMountainHuman = null;
                        userObj.checkedInZone = null;
                        userObj.checkedInZoneHuman = null;
                        userObj.checkedInKey = null;
                        userObj.$save();
                        $rootScope.currentUser = userObj;
                        console.log($rootScope.currentUser);
                        $location.path('/meetup');

                    });// end resetting userObj & rS.cU

                });//end .then of $remove

            });//end checkinsList.$loaded	
				
	   };//end $scope.checkout
	
    }//end CheckoutCtrl
})();