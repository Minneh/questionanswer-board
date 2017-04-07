import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    addToFavorites(question){
      this.get('favoriteQuestions').add(question);
      this.transitionTo('question', question);
    },
    delete(question){
      if(confirm("Are you sure you want ot delete this question?")){
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    }
  }
});
