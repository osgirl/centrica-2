import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.belongsTo('customer'),
  employee: DS.belongsTo('employee'),
  timestamp: DS.attr('number'),
  category: DS.attr('string'),
  booked_time: DS.attr('number'),
  booked_status: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string')
});
