import angular from 'angular';
import PhotosService from './../../services/photos.service';

const moduleName = 'flickr';
var greetModule = angular.module(moduleName, [PhotosService]);

// greetModule.service('photoService', function photoService(){
//     console.log('Defining photoservice');
// });

greetModule.component('flickr', {
    //template: 'Hello, {{$ctrl.user}}!',
    templateUrl: './app/components/flickr/flickr.template.html',
    controller: ['PhotosService', function FlickrController(PhotosService) {
      var photos = PhotosService.processPhotos();

      console.log('Hitting controller for flickr');
      this.user = 'Richa';
    }]
  });

export default moduleName;
