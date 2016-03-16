angular.module('snowyPlayground')

  .controller('ChatCtrl',['$scope', 'ChatFactory', function($scope, ChatFactory ) {
	 
    function getMessages(){
       return ChatFactory.getMessages();
    }
    
    $scope.messages = getMessages();

    $scope.addMessage = function() {
      ChatFactory.addMessage($scope.message)
      .then(function() {
        $scope.message = '';
      });//end .then
    };//end $scope.addMessage


}]);//end ChatCtrl

