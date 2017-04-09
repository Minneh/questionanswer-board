import Ember from 'ember'; //obtain access to Ember.js library as variable 'Ember'
import config from './config/environment';//provide access to our app's configuration data as the variable 'config'

// define unchangesable variable Router
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path:'/question/:question_id'});//include question route with custom path
  this.route('favorites');//include favorites route
});

export default Router; //make this Router constant available to other parts of the application
