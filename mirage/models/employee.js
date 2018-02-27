import { Model, hasMany } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  notifications: hasMany()
});
