import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions:{
    update(question, params){
      this.sendAction('update', question, params);
    },
    //delete question function
    delete(question){
      //if user chooses to delete question...
      if(confirm("Are you sure you want to delete this question?")){
        //send 'destroyQuestion()' action one level upwards to the route handler, question.js in routes
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
