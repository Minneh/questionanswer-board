import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    // show update question form
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },
    // update question function
    update(question){
      // save question parameters in params variable
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
      };
      // hide update question form
      this.set('updateQuestionForm', false);
      // send update functio upwards with question and its parameters
      this.sendAction('update', question, params);
    }
  }
});
