var APP_CONFIG = {
  appliction: {
     name: 'Flickr Application',
     description: 'Demonstrate rendering of flickr photo inside application'
  },
  params: {
    baseUrl: 'https://api.flickr.com/services/rest/?',
    method: 'flickr.people.getPublicPhotos',
    api_key: 'a5e95177da353f58113fd60296e1d250',
    user_id: '24662369@N07',
    format: 'json',
    nojsoncallback: '1'
  }
}

export default APP_CONFIG;
