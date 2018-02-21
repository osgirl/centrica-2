export default function() {
  this.urlPrefix = 'http://localhost:8080';
  this.host = 'http://localhost:8080';
  this.namespace = 'api';



  /*
  const feed = [
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
        "description": "<strong>Joel</strong> visited your property at <strong>11am</strong> and has marked your issue as <strong>resolved</strong>",
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
        "description": "An engineer will visit your property on <strong>Tuesday 3rd July</strong> between <strong>8am-1pm</strong>. The engineer will call on the day to confirm a time slot.",
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
  */

  this.get('/activity-feeds', function (db, request) {
    //console.log('db', db); 
    //console.log('request', request)
    // return { data: db.activityFeeds };
    var attrs = JSON.parse(request.requestBody).activityFeeds;
    var user = db.users.insert(attrs);
    return user;
  });
}
