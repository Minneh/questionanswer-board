import Ember from 'ember';

export default Ember.Component.extend({
  // inject ember service for favorite questions 
  favoriteQuestions: Ember.inject.service()
});
