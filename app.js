// Code goes here
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/view1");
  //
  // Now set up the states
  $stateProvider
    .state('view1', {
      url: "/view1",
      templateUrl: "partials/view1.html"
    })
   .state('view2', {
      url: "/view2",
      templateUrl: "partials/view2.html"
    });
});