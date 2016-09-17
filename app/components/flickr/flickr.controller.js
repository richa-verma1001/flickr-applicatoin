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
      //self.photos = response.data.photos.photo;
      self.photos = mapPhotos(response.data.photos.photo);
    }, function errorCallback(response){
      console.log('Error');
    });
  }

  function mapPhotos(data){
    console.log('Start formatting photos');
    var photos = {};
    //debugger;
    data.map(function(item) {
      photos[item.id] = getPhotoUrl(item);
    });


    return photos;
  }

  function getPhotoUrl(sampleImgObj){
    var url = 'https://farm' + sampleImgObj.farm + '.staticflickr.com/' + sampleImgObj.server + '/' + sampleImgObj.id + '_' + sampleImgObj.secret + '.jpg';
    return url;
  }



  init();
}

export default FlickrController;
