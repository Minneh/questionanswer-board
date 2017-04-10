import Ember from 'ember';

export function questionPopularity(params) {
  // set variable question to first element of params array
  var question = params[0];
// if question has more than five answers, include a fire icon beside it
  if(question.get('answers').get('length') >= 5) {
   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
// make questionPopularity helper available to other files
export default Ember.Helper.helper(questionPopularity);
