export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const customers = server.createList('customer', 10);
  const employees = server.createList('employee', 10);

  const notification = {
    category: customers[0].id,
    timestamp: 1519378449000,
    'alert-type': 'rock',
    //employeeId: server.create('employee').id,
    //customerId: customers[0].id
  };

  server.create('notification', notification);
  server.create('notification', notification);
  server.create('notification', notification);

}
