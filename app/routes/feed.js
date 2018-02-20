import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return Ember.$.getJSON("http://localhost:3000/activity-feed");
  }
});
