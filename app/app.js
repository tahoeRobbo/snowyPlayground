var app = angular.module('snowyPlayground', ['ngRoute', 'firebase']);

app.constant('FBURL', 'https://snowyplayground.firebaseio.com/');

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'app/user/loginTmpl.html',
		controller : 'RegistrationCtrl'
	})
	.when('/login', {
		templateUrl : 'app/user/loginTmpl.html',
		controller : 'RegistrationCtrl'
	})
	.when('/register', {
		templateUrl : 'app/user/registrationTmpl.html',
		controller : 'RegistrationCtrl'
	})
	.when('/profile', {
		templateUrl : 'app/profile/profileTmpl.html',
		controller : 'ProfileCtrl'
	})
	.when('/edits', {
		templateUrl : 'app/vidEdits/editsTmpl.html',
		controller : 'EditsCtrl'
	})
	.when('/chat', {
		templateUrl : 'app/chat/chatTmpl.html',
		controller : 'ChatCtrl'
	})
	.when('/meetup', {
		templateUrl : 'app/meetup/meetupTmpl.html',
		controller : 'MeetupCtrl',
		resolve : {
			mtnsFromRouter : function(MeetupService) {
				return MeetupService.getMountains();
			}
		}//end reslove
	})
	.when('/checkin/:MOUNTAIN/:ZONE', {
		templateUrl : 'app/meetup/checkinsTmpl.html',
		controller : 'CheckinCtrl'
	})	
	.when('/checkin/:MOUNTAIN/:ZONE/checkinsList', {
		templateUrl : 'app/meetup/checkinsListTmpl.html',
		controller : 'CheckinCtrl'
	})
	.when('/otherUsers', {
		templateUrl : 'app/otherUsers/otherUsersTmpl.html',
		controller : 'OtherUsersCtrl'
	})
	.when('/otherUsers/:uId/profile', {
		templateUrl : 'app/otherUsers/otherUsersProfileTmpl.html',
		controller : 'OtherUsersProfileCtrl'
	})
	.otherwise('/');
		
});