import Ember from 'ember';

export default Ember.Route.extend({
  // inject ember service for favorite questions
  favoriteQuestions: Ember.inject.service(),

  // find particular question corresponding to question_id
  model(params){
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    // update question function
    update(question, params){
      //
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key, params[key]);
        }
      });
      question.save(); //save question
      this.transitionTo('index'); // move to index page
    },
    // save answer function
    saveAnswer(params) {
     var newAnswer = this.store.createRecord('answer', params);
     var question = params.question;
     question.get('answers').addObject(newAnswer);
     newAnswer.save().then(function() {
       return question.save();
     });
     this.transitionTo('question', question);// load questions page
   },
   // delete question function
    destroyQuestion(question){
      var answer_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord(); //delete answers from db
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord(); //delete question from db
      });
      this.transitionTo('index'); //move to index page
    },
    // delete answer function
    destroyAnswer(answer){
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
