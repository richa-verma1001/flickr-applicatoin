import angular from 'angular';

const moduleName = 'userAddress';
var userAddress = angular.module(moduleName, []);

userAddress.component('userAddress', {
  templateUrl: './app/components/address/userAddress.template.html',
  controller: function UserAddressConrtoller($stateParams, $scope){
    this.address = {
      'street': 'Laurel Branch',
      'city' : 'Berkely',
      'zip' : '141001'
    }
    console.log('Things' + $scope.things);
    console.log('Things2' + $scope.ctrl.address.street);
  },
  controllerAs: 'ctrl'
});

export default moduleName;
