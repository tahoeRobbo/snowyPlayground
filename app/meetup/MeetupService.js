
(function(){
  angular.module('snowyPlayground')
    .factory('MeetupService',['FBURL', '$rootScope', '$firebaseArray', '$firebaseObject', '$q', function(FBURL, $rootScope, $firebaseArray, $firebaseObject, $q) {

      return {
        getMountains : getMountains
      };

      function getMountains(){
        var dfd = $q.defer(),
            mtnRef = new Firebase(FBURL + 'mountains/'),
            mountains = $firebaseArray(mtnRef),
            mountainsObj = {};

        mountains.$loaded().then(function(){
          mountains.forEach(function(mountain){
            mountainsObj[mountain.name] = mountain;
          });

          dfd.resolve(mountainsObj);
          return mountainsObj;
        });

        return dfd.promise;

      }



    }]);
  })();

////Service version
//(function(){
//  
//  angular.module('snowyPlayground').service('MeetupService', ['FBURL', '$rootScope', '$firebaseArray', '$firebaseObject', '$q', function(FBURL, $rootScope, $firebaseArray, $firebaseObject, $q) {
//    var dfd = $q.defer();
//
//    this.getMountains = function() {
//      var dfd = $q.defer(),
//          mtnRef = new Firebase(FBURL + 'mountains/'),
//          mountains = $firebaseArray(mtnRef),
//          mountainsObj = {};
//      
//
//      mountains.$loaded().then(function() {
//        angular.forEach(mountains, function(mountain) {
//            //assign each mountain to the mtnObj with their names as keys
//          mountainsObj[mountain.name] = mountain;
//          
//        });//end forEach loop inside $loaded
//        
//        dfd.resolve(mountainsObj);
//        return this.mountainsObj;
//        
//      });// end AND THEN functions
//
//
//      return dfd.promise;
//    };//end this.getMountains
//
//
//
//  }]);//end MeetupService
//  
//})();