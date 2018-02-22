import DS from 'ember-data';

export default DS.Model.extend({
  customers: DS.belongsTo('customer'),
  employees: DS.belongsTo('employee'),
  timestamp: DS.attr('number'),
  category: DS.attr('string'),
  'alert-type': DS.attr('string'),
  nick: DS.attr('string'),
  meta: DS.attr(),
  engineer: DS.attr('string')
});
