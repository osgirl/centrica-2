export default function () {

  /*
  this.uriPath = 'http://localhost:8080/';
  this.urlPath = 'http://localhost:8080/';
  this.uri = 'http://localhost:8080/';
  this.url = 'http://localhost:8080/';
  this.host = 'http://localhost:8080/';
  this.namespace = 'http://localhost:8080/';
  */

  this.get('/notifications', (schema, request) => {
    return schema.notifications.all();
  });

  this.get('/customers', (schema, request) => {
    return schema.customers.all();
  });

  this.get('/employees', (schema, request) => {
    return schema.employees.all();
  });
}
