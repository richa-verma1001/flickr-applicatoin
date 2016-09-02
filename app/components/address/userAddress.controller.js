import angular from 'angular';

export default function UserAddressConrtoller($stateParams, $scope){
  this.address = {
    'street': 'Laurel Branch',
    'city' : 'Berkely',
    'zip' : '141001'
  }
}
