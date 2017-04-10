import Ember from 'ember';

export default Ember.Component.extend({
// compute fullAnswer (answer + author) by combining said properties
  fullAnswer: Ember.computed('answer.content', 'answer.author', function() {
    return this.get('answer.content') + ' - by ' + this.get('answer.author');
  }),
  actions: {
    // delete function with prior confirmation
    delete(answer){
      if(confirm("Are you sure you want to delete this answer?")){
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
