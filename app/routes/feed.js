import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('notification', {include: 'customers,employees,notification.customers,notification.employees'})
  }
});
