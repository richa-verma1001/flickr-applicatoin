import angular from 'angular';

const moduleName = 'greetUser';
var greetModule = angular.module(moduleName, []);


greetModule.component('greetUser', {
    templateUrl: './app/components/greetUser.component.html',
    controller: function greetUserController() {
      this.user = 'world';
    },
    controllerAs: 'model'
  });

console.log('GreetUser' + greetModule);
export default moduleName;
