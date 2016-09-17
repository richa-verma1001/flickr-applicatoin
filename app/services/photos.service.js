import angular from 'angular';

class PhotosService {
  constructor($http){
    console.log('Init constructor for flickrPhotos');
    this.$http = $http;
  }

  getPhotos() {
    console.log('Invoking service function');
    let promise;
    debugger;

    promise = this.$http({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1',
    });
    return promise;
  }

  processPhotos() {
    this.getPhotos().then(function successCallback(response){
      console.log('Successfull get');
      // response.data has your response result.
      // Process response.data and store in a DS that can be easily mapped to
      return response.data.photos;
    }, function errorCallback(response){
        console.log('Error trying to get photos from flickr');
    });
  }
}


const moduleName = 'photos.service';
PhotosService.$inject = ['$http'];
angular.module(moduleName, [])
  .service('PhotosService', PhotosService);

export default moduleName;
