import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('notification', {include: 'notification,notification.customers,notification.employees'})
    //return this.get('store').findAll('notification');
  }
});
