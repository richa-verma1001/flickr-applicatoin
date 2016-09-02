import angular from 'angular';
import 'angular-ui-router';
import greetUser from './components/greetUser/greetUser.component';
import aboutUser from './components/aboutUser/aboutUser.component';
import userAddress from './components/address/userAddress.component';
import UserAddressConrtoller from './components/address/userAddress.controller';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, ['ui.router', greetUser, aboutUser, userAddress]);

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
      }).state('address', {
        url: "/address",
        template: '<user-address my-param=$ctrl.richa></user-address>',
        controller: UserAddressConrtoller,
        //component: 'userAddress',
        resolve: {
          print: function(){
            console.log('Resolve before state change to address');
          }
        }
      })
  }
]);

export default moduleName;
