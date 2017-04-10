import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    // show input form for answers
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    // save answer parameters in params variable
    saveAnswer(){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      // hide input form
      this.set('addNewAnswer', false);
      // send save action upwards
      this.sendAction('saveAnswer', params);
    }
  }
});
