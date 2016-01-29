var app = angular.module("app", ['ngRoute', 'firebase', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/nbaldwin/home', {
      templateUrl: 'Partials/home.html',
      controller: 'home'
    })
    .otherwise('/nbaldwin/home');
    
  }]);
