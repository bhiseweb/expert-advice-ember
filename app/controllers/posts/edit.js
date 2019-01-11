import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject } from "@ember/service";

export default Controller.extend({
  title: alias('post.title'),
  body: alias('post.body'),

  flashMessages: inject(),

  actions: {
    save() {
      const flashMessages = this.get('flashMessages');
      this.get('post').save().then(() => {
        flashMessages.success('Question Updated Successfully');
      });
    }
  }
});
