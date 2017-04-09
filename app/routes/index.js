import Ember from 'ember';

export default Ember.Route.extend({
  // inject ember service for favorite questions
  favoriteQuestions: Ember.inject.service(),
  // obtain questions and answers from db
  model(){
    return Ember.RSVP.hash({
       questions: this.store.findAll('question'),
       answers: this.store.findAll('answer')
     });
  },

  actions:{
    // save question function to save questions to db
    saveQuestion3(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();

      // move to index page
      this.transitionTo('index');
    }
  }
});
