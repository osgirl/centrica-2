export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  //const customers = server.createList('customer', 10);
  //const employees = server.createList('employee', 10);

  const notification = {
    category: 'cat1',
    timestamp: 1519378449000,
    'alert-type': 'rock',
    employees: server.create('employee', {}),
    customers: server.create('customer')
  };

  server.create('notification', notification);
  server.create('notification', notification);
  server.create('notification', notification);

}
