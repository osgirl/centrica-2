export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const customers = server.createList('customer', 10);
  const employees = server.createList('employee', 10);

  const notifications = [];
  
  const notification1 = { category: 'some cat', timestamp: 1519378449000, 'alert-type': 'rock' };
  notifications.push(server.create('notification', notification1 ));

  notifications.push(server.create('notification', employees[1]));
  notifications.push(server.create('notification', customers[2], employees[2]));

}

/*
  customers: DS.belongsTo('customer'),
  employees: DS.belongsTo('employee'),
  timestamp: DS.attr('number'),
  category: DS.attr('string'),
  'alert-type': DS.attr('string'),
  nick: DS.attr('string'),
  meta: DS.attr(),
  engineer: DS.attr('string')
*/
