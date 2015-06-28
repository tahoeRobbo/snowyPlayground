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
	.otherwise('/');
		
});