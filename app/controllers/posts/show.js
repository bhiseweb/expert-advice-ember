import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject } from "@ember/service";

export default Controller.extend({
  answer: null,

  title: alias('post.title'),
  body: alias('post.body'),
  comments: alias('post.comments'),
  currentUser: alias('currentSession.user'),

  currentSession: inject(),
  flashMessages: inject(),

  actions: {
    postAnAnswer() {
      const flashMessages = this.get('flashMessages');
      if(this.get('answer') == null) {
        flashMessages.danger('Body field require');
      }
      else{
        let comment = this.store.createRecord('comment', {
          description: this.get('answer'),
          post: this.get('post'),
          user: this.get('currentSession.user')
        });
        comment.save().then(() => {
          this.set('answer', null);
          flashMessages.success('Answer Posted Successfully');
        });
      }
    }
  }
});
