export default function() {
  this.namespace = '/api';

  let feed = [
    {
      type: 'activity-feed',
      id: 1,
      attributes: {
        "timestamp": "1518615151",
        "category": "VISIT",
        "alert-type": "COMPLETE",
        "title": "Your engineer visited today",
        "visit-engineer": "Joel",
        "visit-time": "11am",
        "issue-status": "resolved",
        "customer-id": 101
      }
    },
    {
      type: 'activity-feed',
      id: 2,
      attributes: {
        "timestamp": "1518615151",
        "category": "VISIT",
        "alert-type": "INFO",
        "title": "Your engineer visit is booked",
        "visit-date": "Tuesday 3rd July",
        "visit-time": "8am - 1pm",
        "customerId": 101
      }
    },
    {
      type: 'activity-feed',
      id: 3,
      attributes: {
        "timestamp": "1518615151",
        "category": "METERREAD",
        "alert-type": "ACTIONNEEDED",
        "title": "It is time to read your metre",
        "description": "To keep your energy bills accurate please submit your meter reading",
        "customer-id": 101
      }
    },
    {
      type: 'activity-feed',
      id: 4,
      attributes: {
        "timestamp": "1518615151",
        "category": "TARIFF",
        "alert-type": "INFO",
        "title": "Save money by switching tariff",
        "description": "Looking at your recent energy usage we can see switching can save you money",
        "customer-id": 101
      }
    },
    {
      type: 'activity-feed',
      id: 5,
      attributes: {
        "timestamp": "1518615151",
        "category": "BILL",
        "alert-type": "ACTIONNEEDED",
        "title": "Your energy bill is now ready",
        "customer-id": 101
      }
    }
  ];

  this.get('/activity-feeds', function (db, request) {
    return { data: feed };
  });
}