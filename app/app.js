var app = angular.module("app", ['ui.router', 'ngRoute', 'firebase', 'angular.filter']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('home', {
    url: '/nbaldwin/home',
    views: {
      '': {
        templateUrl: 'Partials/home.html',
        controller: 'home'
      },
      '@home': {
        templateUrl: 'Partials/developer-portfolio.html',
        controller: 'developer-portfolio'
      } 
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/nbaldwin/home');

});
