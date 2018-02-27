export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const notification1 = {
    timestamp: 1519378449000,
    category: 'VISIT',
    title: 'Your engineer visited today',
    body: '<strong>%ENGINEER%</strong> visited your property at <strong>%BOOKEDTIME%</strong> and has marked the issue as <strong>%BOOKEDSTATUS%</strong>.',
    booked_time: 1517482800000,
    booked_status: 'resolved',
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification1);

  const notification2 = {
    timestamp: 1519378449000,
    category: 'METERREAD',
    title: 'Bern Bern Bern ',
    body: 'Lorem ipsum jipsum ',
    booked_time: 1519378449000,
    booked_status: 'resolved',
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification2);

  const notification3 = {
    timestamp: 1519378449000,
    category: 'BILL',
    title: 'kay kay kay ',
    body: 'Lorem ipsum jipsum ',
    booked_time: 1519378449000,
    booked_status: 'resolved',
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification3);

}
