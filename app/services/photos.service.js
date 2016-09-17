import angular from 'angular';

class PhotosService {
  constructor($http){
    this.$http = $http;
    //this.processPhotos();
  }

  getPhotos() {
    let promise;

    promise = this.$http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1',
      cache: true,  // true only if you want the response to be cached
    });
    return promise;
  }

  getImgUrl(photo) {

  }
}


const moduleName = 'photos.service';
PhotosService.$inject = ['$http'];
angular.module(moduleName, [])
  .service('PhotosService', PhotosService);

export default moduleName;
