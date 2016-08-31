import angular from 'angular';
import greetUser from './greetUser.component';

const moduleName = 'myApp';
var myApp = angular.module(moduleName, [greetUser]);
console.log('MyApp' + myApp);

export default moduleName;
