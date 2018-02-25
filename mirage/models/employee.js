import { Model, hasMany } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  notifications: hasMany(),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
});
