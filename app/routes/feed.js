import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.getJSON("http://localhost:8080/api/activity-feeds");
  }
});
