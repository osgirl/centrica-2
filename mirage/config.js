export default function () {

  const json = {
    "data": [
      {
        "type": "notification",
        "id": "1",
        "attributes": {
          "timestamp": "1518615151",
          "category": "visit",
          "engineer": "Joel",
          "meta": {
            "booked_time": "2018-01-09T09:13:42+0000"
          },
          "steps": [{
            "time": "1518615151",
            "state": "resolved"
          },
          {
            "time": "1518615151",
            "state": "confirmed"
          },
          {
            "time": "1518615151",
            "state": "booked"
          }
        ]},
        "links": {
          "self": "https://api.britishgas.co.uk/notifications/1"
        },
        "relationships": {
          "customer": {
            "links": {
              "self": "https://api.britishgas.co.uk/notifications/1/relationships/customer",
              "related": "https://api.britishgas.co.uk/articles/1/customer"
            },
            "data": { "type": "customers", "id": "1337" }
          }
        }
      },
      {
        "type": "notification",
        "id": "2",
        "attributes": {
          "timestamp": "1518615151",
          "category": "visit",
          "engineer": "Dave",
          "meta": {
            "booked_time": "2018-01-09T09:13:42+0000"
          },
          "steps": [{
            "time": "1518615151",
            "state": "resolved"
          },
          {
            "time": "1518615151",
            "state": "confirmed"
          },
          {
            "time": "1518615151",
            "state": "booked"
          }]
        },
        "links": {
          "self": "https://api.britishgas.co.uk/notifications/1"
        },
        "relationships": {
          "customer": {
            "links": {
              "self": "https://api.britishgas.co.uk/notifications/1/relationships/customer",
              "related": "https://api.britishgas.co.uk/articles/1/customer"
            },
            "data": { "type": "customers", "id": "1337" }
          }
        }
      },
      {
        "type": "notification",
        "id": "3",
        "attributes": {
          "timestamp": "1518615151",
          "category": "visit",
          "engineer": "Paul",
          "meta": {
            "booked_time": "2018-01-09T09:13:42+0000"
          },
          "steps": [{
            "time": "1518615151",
            "state": "resolved"
          },
          {
            "time": "1518615151",
            "state": "confirmed"
          },
          {
            "time": "1518615151",
            "state": "booked"
          }]
        },
        "links": {
          "self": "https://api.britishgas.co.uk/notifications/1"
        },
        "relationships": {
          "customer": {
            "links": {
              "self": "https://api.britishgas.co.uk/notifications/1/relationships/customer",
              "related": "https://api.britishgas.co.uk/articles/1/customer"
            },
            "data": { "type": "customers", "id": "1337" }
          }
        }
      }
    ]
  };

  this.get('http://localhost:8080/notifications', function () {
    return json;
  });
}
