angular.module('snowyPlayground')

  .factory('ChatFactory', ['$firebaseArray', '$rootScope', 'FBURL', function($firebaseArray, $rootScope, FBURL) {

    
        		
    var ref = new Firebase(FBURL + '/messages'),
		    fbMessages = $firebaseArray(ref);
    
    return{
      getMessages : getMessages,
      addMessage : addMessage
    };
    	
    function getMessages(){
      return fbMessages;
    }//end getMessages
    
	  function addMessage(message){
		  return fbMessages.$add({
			   message : message.text,
			   user : $rootScope.currentUser.userName,
			   userPic : $rootScope.currentUser.picData
		    });
	   }//end addMessage
    

	
}]);//end ChatService



//Old service style
//
//var app = angular.module('snowyPlayground');
//
//app.service('ChatService', function($firebaseArray, $rootScope, FBURL) {
//	
//		var ref = new Firebase(FBURL + '/messages');
//		var fbMessages = $firebaseArray(ref);
//		
//	
//	this.addMessage = function(message){
//		return fbMessages.$add({
//			message : message.text,
//			user : $rootScope.currentUser.userName,
//			userPic : $rootScope.currentUser.picData
//		});
//	};
//
//	
//});//end ChatService