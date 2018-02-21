import DS from 'ember-data';

export default DS.Model.extend({
    "timestamp": DS.attr('number'),
    "category": DS.attr('string'),
    "alert-type": DS.attr('string'),
    "engineer": DS.attr('string')
});
