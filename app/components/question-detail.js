import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    // add question to favorites function
    addToFavorites(question){
      // add question to 'favoriteQuestions'
      this.get('favoriteQuestions').add(question);
      // move to question page with selected question
      this.transitionTo('question', question);
    },
    // delete function with prior confirmation
    delete(question){
      if(confirm("Are you sure you want ot delete this question?")){
        // send delete question action upwards
        this.sendAction('destroyQuestion', question);
      }
    },
    // send delete answer action upwards
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    }
  }
});
