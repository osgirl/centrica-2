import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const config = {include: 'customers,employees,notification.customers,notification.employees'};
    return this.store.query('notification', config);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('dictionary', this.store.findRecord('dictionary-item', 'VISIT2'));
  }
});
