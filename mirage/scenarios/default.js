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
    booked_status: 'resolved',
    code: 'VISIT1',
    booked_time: 1517482800000,
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification1);

  const notification2 = {
    timestamp: 1519378449000,
    category: 'METERREAD',
    title: 'It\'s time to read your meter',
    body: 'To keep your energy bills accurate, please send us your meter reading.',
    booked_status: 'resolved',
    code: 'METERREAD1',
    booked_time: 1519378449000,
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification2);

  const notification3 = {
    timestamp: 1519378449000,
    category: 'BILL',
    title: 'Save money by switching tariff',
    body: 'Looking at your recent energy usage, we can see that switching can save you money.',
    booked_status: 'resolved',
    code: 'BILL1',
    booked_time: 1519378449000,
    employee: server.create('employee'),
    customer: server.create('customer')
  };

  server.create('notification', notification3);

}
