import Ember from 'ember';

export default Ember.Component.extend({

  fullAnswer: Ember.computed('answer.content', 'answer.author', function() {
    return this.get('answer.content') + ' - by ' + this.get('answer.author');
  }),
  actions: {
    delete(answer){
      if(confirm("Are you sure you want to delete this answer?")){
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
