import DS from 'ember-data';

export default DS.Model.extend({
    "title": DS.attr('string'),
    "description": DS.attr('string'),
    "cta-text": DS.attr('string'),
    "cta-link": DS.attr('string'),
});
