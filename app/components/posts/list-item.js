import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject } from "@ember/service";
import { computed } from '@ember/object';

export default Component.extend({
  title: alias('post.title'),
  body: alias('post.body'),
  user: alias('post.user'),
  tags: alias('post.tags'),

  currentSession: inject(),

  isAccesseble: computed('user', function() {
    let currentUser = this.get('currentSession.user');
    let userId = this.get('user.id');
    return currentUser && currentUser.id == userId
  }),

  actions: {
    delete() {
      let post = this.get('post');
      this.get('delete')(post);
    }
  }
});
