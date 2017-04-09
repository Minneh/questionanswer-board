//answer model
import DS from 'ember-data';

export default DS.Model.extend({ //exporting a DS.Model, i.e. adding it to the data store

  // define answer attributes where DS === Data Store; attr() === attribute
  author: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
