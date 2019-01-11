import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('post', params.slug);
  },

  setupController: function(controller, model) {
    controller.set('post', model);
  }
});
