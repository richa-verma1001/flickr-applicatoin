import angular from 'angular';

class PhotosService {
  //const self = this;
  //var photos = {};

  constructor($http){
    this.$http = $http;
    this.photos = {};
    //this.getImgUrl();
  }

  getPhotos() {
    let promise;
    promise = this.$http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1',
      cache: true,
    });
    return promise;
  }

  getImgUrl(photo) {
    let promise = this.getPhotos();

    promise.then(function (response){
      this.photos = response.data.photos.photo;
      console.log(this.photos);
    });
  }
}


const moduleName = 'photos.service';
PhotosService.$inject = ['$http'];
angular.module(moduleName, [])
  .service('PhotosService', PhotosService);

export default moduleName;
