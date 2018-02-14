import Route from '@ember/routing/route';

// TODO generate a feed component to perform GET /feed and populate model
// then in this route use that model
// https://guides.emberjs.com/v2.18.0/routing/specifying-a-routes-model/

export default Route.extend({
  model() {
    return [
    {
      "id": 1,
      "timestamp": "1518615151",
      "status": "ok",
      "serviceAgentId": "ok",
      "title": "Save money by switching tariff",
      "description": "Joel visited your property today and has marked your issue as resolved",
      "category": "ok",
      "customerId": "ok"
    },
    {
      "id": 2,
      "timestamp": "1518615151",
      "status": "ok",
      "serviceAgentId": "ok",
      "title": "It is time to read your metre",
      "description": "To keeo your energy bills accurate please submit your metre reading",
      "category": "ok",
      "customerId": "ok"
    },
    {
      "id": 9,
      "timestamp": "1518615151",
      "status": "ok",
      "serviceAgentId": "ok",
      "title": "Your engineer visited today",
      "description": "Looking at your recent energy usage we can see switching can save you money",
      "category": "ok",
      "customerId": "ok"
    }
  ]
  }
});
