var app = angular.module('snowyPlayground', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'app/home/homeTmpl.html',
		controller : 'HomeCtrl'
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
		controller : 'ProfilCtrl'
	})
	.when('/edits', {
		templateUrl : 'app/vidEdits/editsTmpl.html',
		controller : 'EditsCtrl'
	})
	.when('/chat', {
		templateUrl : 'app/chat/chatTmpl.html',
		controller : 'ChatCtrl'
	})
	.otherwise('/');
		
});