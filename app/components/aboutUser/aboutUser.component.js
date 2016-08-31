import angular from 'angular';

const moduleName = 'aboutUser';
var aboutModule = angular.module(moduleName, []);


aboutModule.component('aboutUser', {
    //templateUrl: './app/components/greetUser.component.html',
    //template: 'Hello, {{$ctrl.description}}!',
    templateUrl: './app/components/aboutUser/aboutUser.template.html',
    controller: function AboutUserController() {
      this.description = 'Richa is from India';
    }
  });

export default moduleName;
