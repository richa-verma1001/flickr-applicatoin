import angular from 'angular';

const moduleName = 'greetUser';
var greetModule = angular.module(moduleName, []);
console.log('GreetUser' + greetModule);

greetModule.component('greetUser', {
    templateUrl: './app/hello.html',
    controller: function GreetUserController() {
      this.user = 'world';
    },
    controllerAs: 'ctrl'
  });


export default moduleName;
