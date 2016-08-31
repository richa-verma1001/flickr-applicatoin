## About
A basic angular application to demonstrate how to run Hello Angular with its ecosystem.

There are two parts to understand here.
1. For firsts, you can always clone this repo and run it locally to get your Hello Angular app going.
2. Or, you can learn how to build this yourself from scratch.

Once you know how to stand an application up from scratch, you can use this as a template to build upon for any future more fun applications.

### Getting Started
+ npm init: This will generate a default package.json for you
+ npm install --save 'packagename': This will install current stable version for dependency and also save dependency in your package.json
+ Create and configure webpack.config.js file
+ Add loaders for transpiling your JS, ES6, CSS and JSON loaders etc to your webpack.config.js file
+ If using angular 1.x, configure .babelrc for a es5preset

With the above configurations, you should have your ecosystem ready to help you with developing angular applications.

### What to expect
The current version of application instantiates angular in a template by adding the 'ng-app' attribute to the template <html> tag. This starts angular 'myApp' application.

Result: At this point in applicaion, you will see 'Hello, world' printed out from a angular application [greet-user]
