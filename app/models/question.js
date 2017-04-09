// questions model
import DS from 'ember-data';

//exporting a DS.Model, i.e. adding it to the data store
export default DS.Model.extend({
  // define question attributes where DS === Data Store; attr() === attribute
  author: DS.attr(),
  body: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
