import angular from 'angular';
import 'angular-ui-router';
import greetUser from './components/greetUser/greetUser.component';
import aboutUser from './components/aboutUser/aboutUser.component';
import userAddress from './components/address/userAddress.component';
import flickr from './components/flickr/flickr.component';
//import UserAddressConrtoller from './components/address/userAddress.controller';
//import FlickrConrtoller from './components/flickr/flickr.controller';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, ['ui.router', greetUser, aboutUser, userAddress, flickr]);

myApp.config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/hello");

    $stateProvider
      .state('hello',{
        url: "/hello",
        template: '<greet-user></greet-user>'
      })
      .state('about',{
        url: "/about",
        template: '<about-user></about-user>'
      }).state('about.address', {
        url: "/address",
        template: '<user-address></user-address>',
        controller: ['$scope', function userAddressRouteConrtoller($scope){
          this.title = 'Text sent from state definition';
        }],
        controllerAs: 'userRouteCtrl'
      }).state('flickr', {
        url: "/flickr",
        template: '<flickr></flickr>'
      })
  }
]);

export default moduleName;
