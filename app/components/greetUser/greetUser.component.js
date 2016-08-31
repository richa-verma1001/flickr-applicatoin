import angular from 'angular';
//import greetUserTemplate from './greetUser.component.html';
const moduleName = 'greetUser';
var greetModule = angular.module(moduleName, []);


greetModule.component('greetUser', {
    //templateUrl: './app/components/greetUser.component.html',
    //template: 'Hello, {{$ctrl.user}}!',
    templateUrl: './app/components/greetUser/greetUser.template.html',
    controller: function GreetUserController() {
      this.user = 'richa';
    }
    // controller: function greetUserController() {
    //   this.data = [
    //     {
    //       name: 'richa',
    //       phone: '22'
    //     }
    //   ];
    // },
    // controllerAs: 'user'
  });

console.log('GreetUser' + greetModule);
export default moduleName;
