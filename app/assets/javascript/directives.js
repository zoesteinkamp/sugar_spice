var app = angular.module('main-directives', []);

app.directive("homepage", function(){
  return{
    restrict: 'AEC',
    templateUrl: 'templates/home.html',
    controller: 'homepage'
  };
});
