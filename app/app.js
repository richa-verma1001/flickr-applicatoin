import angular from 'angular';
import angularRoute from 'angular-route';
import greetUser from './components/greetUser/greetUser.component';
import aboutUser from './components/aboutUser/aboutUser.component';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, [angularRoute, greetUser, aboutUser]);
console.log('MyApp' + myApp);


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
]);

export default moduleName;
