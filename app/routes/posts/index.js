import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    query: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('post', { query: params.query, page: {
        number: params.page,
        size: params.size,
      },
    });
  }
});
