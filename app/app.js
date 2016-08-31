import angular from 'angular';
import angularRoute from 'angular-route';
import greetUser from './components/greetUser.component';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, [angularRoute, greetUser]);
console.log('MyApp' + myApp);


myApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/details', {
        template: '<greet-user></greet-user>'
      }).
      otherwise('/details');
    }
]);

export default moduleName;
