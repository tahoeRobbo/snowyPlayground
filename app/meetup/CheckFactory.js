angular.module('snowyPlayground')
  .factory('CheckFactory', ['FBURL', 'MeetupService', '$routeParams', '$location', '$rootScope', '$firebaseArray', '$firebaseObject', function CheckFactory(FBURL, MeetupService, $routeParams, $location, $rootScope, $firebaseArray, $firebaseObject){

    var mountain = $routeParams.MOUNTAIN,
        zone = $routeParams.ZONE,
        checkedInError = false;

    
    return {
      getCheckinsList : getCheckinsList,
      addCheckIn : addCheckIn
    };
    
    function getCheckinsList(){
      var checkinRef = new Firebase(FBURL + 'mountains/' + mountain+ '/zones/' + zone + '/checkins');
      
      return $firebaseArray(checkinRef);
    }
    
    
    //called from CheckinCtrl, takes checkin, currentMountain, currentZone from $scope
    function addCheckIn(checkin, humanMountain, humanZone){

      //If already checked in, return null.  should never have the checkin option, though
      if($rootScope.currentUser.checkedIn){
        return null;
      }
      //  loads who is checked in to a specific mountain and loads it into the 'checkinObj'
      //creates myCheckinData with input from HTML -> CheckinCtrl, $rootScope, $routeParams
      var checkinRef = new Firebase(FBURL + 'mountains/' + mountain+ '/zones/' + zone + '/checkins'),
          checkinObj = $firebaseArray(checkinRef),
          myCheckinData = {
              firstName : $rootScope.currentUser.firstName,
			        lastName : $rootScope.currentUser.lastName,
              userName : $rootScope.currentUser.userName,
              as : checkin.whatDo,
              asSpecific : checkin.doinWhat || null,
              checkedInAt : Firebase.ServerValue.TIMESTAMP,
              id : $rootScope.currentUser.uid,
              mountain : mountain,
              zone : zone
            };
        //adds new checkin to checkinObj (firebaseArray of people checked into a mtn/zone)
        checkinObj.$add(myCheckinData)
        //after checkin data added to firebase, current user info pulled from firebase
        //adds and saves checkin info.
        .then(function(data){
          var userRef = new Firebase(FBURL+ 'users/' + $rootScope.currentUser.uid),
              userObj = $firebaseObject(userRef);
          
          userObj.$loaded(function(){
            userObj.checkedIn = true;
            userObj.checkedInAs = checkin.whatDo;
            userObj.checkedInAsSpecific = checkin.doinWhat || null;
            userObj.checkedInMountain = mountain;
            userObj.checkedInZone = zone;
            userObj.checkedInKey = data.key();
            userObj.checkedInMountainHuman = humanMountain;
            userObj.checkedInZoneHuman = humanZone;
            userObj.$save();
            $rootScope.currentUser = userObj;
          });
          
          //after checked in and user info updated, route to checked in zone
          $location.path('/checkin/' + mountain + '/' + zone  + '/checkinsList');

        });
    }//end addCheckin                 
                          

  }]);//end ChatFactory



//
//  (function getCheckinsList(){
//    
//    $scope.checkedInUsers = CheckFactory.getCheckinsList();
//    
//    console.log($scope.checkedInUsers, 'checkedinUsers from ctrl');
//  })();
