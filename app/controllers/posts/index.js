import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  query: null,
  queryParams: ['page', 'size'],
  page: 1,
  size: 3,

  count: computed('model.meta.pagination', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total+1).join('x').split('').map((e,i) => i+1);
  }),

  actions: {
    delete(post) {
      post.destroyRecord();
    }
  }
});
