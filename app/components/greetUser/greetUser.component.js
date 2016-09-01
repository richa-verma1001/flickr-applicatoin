import angular from 'angular';
//import greetUserTemplate from './greetUser.component.html';
const moduleName = 'greetUser';
var greetModule = angular.module(moduleName, []);


greetModule.component('greetUser', {
    //template: 'Hello, {{$ctrl.user}}!',
    templateUrl: './app/components/greetUser/greetUser.template.html',
    controller: function GreetUserController() {
      this.user = 'richa';
    }
  });

export default moduleName;
