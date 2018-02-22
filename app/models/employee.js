import DS from 'ember-data';

export default DS.Model.extend({
  norifications: DS.hasMany('notification'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
