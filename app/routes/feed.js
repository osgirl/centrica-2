import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.$.getJSON("http://localhost:3000/activityFeed");
  }
});
