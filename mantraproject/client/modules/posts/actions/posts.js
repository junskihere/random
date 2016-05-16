import Post from '/lib/collections/posts.js'

export default {
  createPost({Meteor,LocalState,FlowRouter},formData){
    const post = new Post();
    post.title = formData.title;
    post.body = formData.body;
    post.user_id = Meteor.uuid();
    post.createdAt = new Date();
    post.save((err)=>{
      if(err){
        const errors = err.details[0];
        return LocalState.set(errors.name,errors.message);
      }
      FlowRouter.go('/posts');
    });



  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  }
}
