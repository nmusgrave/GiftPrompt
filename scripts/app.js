var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

// configure routes
app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
            templateUrl : 'views/signin.html',
            controller  : 'SignInCtrl'
    })
    .when('/main', {
            templateUrl : 'views/main.html',
            controller  : 'MainCtrl'
    })
});
