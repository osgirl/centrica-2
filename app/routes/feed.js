import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return this.get('store').findAll('activity-feed');
  }
});
