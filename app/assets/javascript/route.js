var app= angular.module('sugarSpice')

app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {       // our home page
      url: '/',
      templateUrl: 'templates/home.html',
   })
}])
