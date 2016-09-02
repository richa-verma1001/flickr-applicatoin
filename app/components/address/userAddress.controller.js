import angular from 'angular';

export default function UserAddressConrtoller($scope){

  console.log($scope.$parent.userRouteCtrl.title);
  this.title = $scope.$parent.userRouteCtrl.title;
  this.address = {
    'street': 'Laurel Branch',
    'city' : 'Berkely',
    'zip' : '141001'
  }
}
