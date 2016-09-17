import angular from 'angular';

function FlickrController(PhotoService) {

  // Cannot reference this directly inside scope anymore. Must
  // set this to self and use self inside scope
  const self = this;

  function init() {
    self.user = 'Richa';
    processPhotos();
  }

  // Ideally I think this function should be placed inside service
  function processPhotos(){
    var promise = PhotoService.getPhotos();

    promise.then(function successCallback(response){
      console.log('Success' + response.data.photos.photo[0].farm);
      self.photos = response.data.photos;
      formatPhotos(response.data.photos);
    }, function errorCallback(response){
      console.log('Error');
    });
  }

  function formatPhotos(photoArray){
    console.log('Start formatting photos');
  }



  init();
}

export default FlickrController;
