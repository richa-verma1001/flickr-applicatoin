import angular from 'angular';

const moduleName = 'greetUser';
var greetModule = angular.module(moduleName, []);


greetModule.component('greetUser', {
    //templateUrl: './app/components/greetUser.component.html',
    template: 'Hello, {{$ctrl.user}}!',
    controller: function GreetUserController() {
      this.user = 'world';
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
