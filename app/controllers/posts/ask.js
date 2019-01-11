import Controller from '@ember/controller';
import { inject } from "@ember/service";

export default Controller.extend({
  title: null,
  body: null,
  tags: null,

  currentSession: inject(),
  flashMessages: inject(),

  actions: {
    save() {
      const flashMessages = this.get('flashMessages');
      var title = this.get('title');
      var tags = this.get('tags');
      if (title && tags) {
        let tag1 = this.store.createRecord('tag', { name: tags})
        tag1.save().then((res) => {
          let post = this.store.createRecord('post', {
            title: title,
            body: this.get('body'),
            user: this.get('currentSession.user'),
          });

          post.get('tags').addObject(res);
          post.save().then(() => {
            this.setProperties({
              title: null,
              body: null,
              tags: null
            });
            flashMessages.success('Posted Question Successfully');
          });
        });
      }else{
        if(tags == null){  flashMessages.danger('Tag field required'); }
        if(title == null){  flashMessages.danger('Title field required'); }
      }
    }
  }
});
