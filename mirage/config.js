export default function () {

  this.get('/notifications', (schema, request) => {
    return schema.notifications.all();
  });

  this.get('/customers', (schema, request) => {
    return schema.customers.all();
  });

  this.get('/employees', (schema, request) => {
    return schema.employees.all();
  });

  this.get('/notifications/:id');
  this.get('/customers/:id');
  this.get('/employees/:id');

  this.get('/employees/notifications', (schema, request) => {
    return schema.employees.notifications.all();
  });
}
