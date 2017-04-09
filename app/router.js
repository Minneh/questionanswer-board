import Ember from 'ember'; //obtain access to Ember.js library as variable 'Ember'
import config from './config/environment';//provide access to our app's configuration data as the variable 'config'

// define unchangesable variable Router
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path:'/question/:question_id'});
  this.route('favorites');
});

export default Router; //make this Router constant available to other parts of the application
