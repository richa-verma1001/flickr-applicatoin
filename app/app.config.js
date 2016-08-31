import myApp from 'myApp';
import angularRoute from 'angular-route';

myApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      locationProvider.hashPrefix('!');

      $routeProvider.
      when('/details', {
        template: '<greet-user></greet-user>'
      }).
      otherwise('/details');
    }
]);
