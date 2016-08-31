import angular from 'angular';
//import angularRoute from 'angular-route';
import 'angular-ui-router';
import greetUser from './components/greetUser/greetUser.component';
import aboutUser from './components/aboutUser/aboutUser.component';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, ['ui.router', greetUser, aboutUser]);

myApp.config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");

    $stateProvider
      .state('hello',{
        url: "/hello",
        template: '<greet-user></greet-user>'
      })
      .state('about',{
        url: "/about",
        template: '<about-user></about-user>'
      })
  }
]);

/*
myApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/hello', {
        template: '<greet-user></greet-user>'
      }).
      when('/about', {
        template: '<about-user></about-user>'
      }).
      otherwise('/hello');
    }
]); */

export default moduleName;
