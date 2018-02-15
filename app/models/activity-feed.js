import DS from 'ember-data';

export default DS.Model.extend({
    "timestamp": DS.attr('string'),
    "category": DS.attr('string'),
    "title": DS.attr('string'),
    "description": DS.attr('string'),
    "customer-id": DS.attr('number'),
    "visit-engineer": DS.attr('string'),
    "visit-time": DS.attr('string'),
    "issue-status": DS.attr('string'),
});
