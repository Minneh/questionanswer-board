import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
   questionFormShow() {
     this.set('addNewQuestion', true);
   },
  //  component behaviour for save button
   saveQuestion1(){
    // collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names.
     var params = {
       author: this.get('author'),
       body: this.get('body'),
       notes: this.get('notes'),
     };
     this.set('addNewQuestion', false); //hide form again after each field's value is collected
     this.sendAction('saveQuestion2', params); //emits the action saveQuestion2 sending with it the params hash that we just made
   }
 }
});
