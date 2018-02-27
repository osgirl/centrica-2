export default function () {

  this.get('/notifications', (schema) => {
    return schema.notifications.all();
  });

  this.get('/customers', (schema) => {
    return schema.customers.all();
  });

  this.get('/employees', (schema) => {
    return schema.employees.all();
  });

  this.get('/notifications/:id');
  this.get('/customers/:id');
  this.get('/employees/:id');

  this.get('/employees/notifications', (schema) => {
    return schema.employees.notifications.all();
  });

  // this.get('/dictionary-items', (schema, request) => {
  //   return {
  //     // "data": [
  //     //   {
  //     //     "id": 1,
  //     //     "type": "dictionary-item",
  //     //     "attributes": {
  //     //       "title": "Your visit is booked, yeah",
  //     //       "ctaText": "Change booking",
  //     //       "ctaLink": "#"
  //     //     }
  //     //   }
  //     // ]
  //   }
    
  // });


  this.get('/dictionary-items/');
  this.get('/dictionary-items/:id');
}