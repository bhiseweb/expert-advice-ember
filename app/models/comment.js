import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  description: attr('string'),
  user: belongsTo('user'),
  post: belongsTo('post'),
});
