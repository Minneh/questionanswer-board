import Ember from 'ember';

export default Ember.Route.extend({
  // inject ember service for favorite questions
  favoriteQuestions: Ember.inject.service(),

  // obtain questions and answers from db
  model(){
    return Ember.RSVP.hash({
      // this.store: the Firebase data store we've set up for our application
      // the findAll() method with the argument question/answer instructs Ember Data to find all records of the type question/answer in the store, and return them to our application.
       questions: this.store.findAll('question'),
       answers: this.store.findAll('answer')
     });
  },

  actions:{
    // save question function to save questions to db
    saveQuestion3(params){
      var newQuestion = this.store.createRecord('question', params); //use params to create new question record in the store
      newQuestion.save(); //save new question

      // move to index page and see our new question in the list
      this.transitionTo('index');
    }
  }
});
