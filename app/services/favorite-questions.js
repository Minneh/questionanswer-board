import Ember from 'ember';

export default Ember.Service.extend({
  // declare blank array questions[]
  questions: [],
// add passed question to array
  add(question){
    this.get('questions').pushObject(question);
  },
  // remove passed question from array 
  delete(question){
    this.get('questions').removeObject(question);
  }
});
