import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  body: attr('string'),
  slug: attr('string'),
  title: attr('string'),
  user: belongsTo('user'),
  comments: hasMany('comments'),
  tags: hasMany('tag')
});
