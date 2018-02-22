export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const customers = server.createList('customer', 10);
  const employees = server.createList('employee', 10);

  const notifications = [];
  
  notifications.push(server.create('notification', customers[0]));
  notifications.push(server.create('notification', employees[1]));
  notifications.push(server.create('notification', customers[2], employees[2]));

}
