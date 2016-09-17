## About
Initial angular application to demonstrate pulling photos for flickr. This app uses a nasa user key and token to pull data via endpoint https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos


### Getting Started
+ npm init: This will generate a default package.json for you
+ npm install --save 'packagename': This will install current stable version for dependency and also save dependency in your package.json
+ Create and configure webpack.config.js file
+ Add loaders for transpiling your JS, ES6, CSS and JSON loaders etc to your webpack.config.js file
+ If using angular 1.x, configure .babelrc for a es5preset

With the above configurations, you should have your ecosystem ready to help you with developing angular applications.

### What to expect
There is a flickr route added to the navigation. This route displays raw photo data (for now) from flickr


### Conventions
+ Template files to be saved as <componentName>.template.html or <componentName>.html ==> Saving with other naming conventions did not load the controller date into my template.
+ Components by convention are named as <componentName>.component.js
+
