import angular from 'angular';
import UserAddressConrtoller from './userAddress.controller';

const moduleName = 'userAddress';
var userAddress = angular.module(moduleName, []);

userAddress.component('userAddress', {
  templateUrl: './app/components/address/userAddress.template.html',
  controller: ['$stateParams', '$scope', UserAddressConrtoller],
  controllerAs: 'ctrl'
});

export default moduleName;
