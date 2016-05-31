export default {
  loginuser({Meteor, FlowRouter, LocalState},formData) {
    LocalState.set("loginError",null);

    Meteor.loginWithPassword(formData.email, formData.password,(err)=>{
      if(err){
        return LocalState.set('loginError', err.message);
      }
      FlowRouter.go('/posts');
    });

  },

  clearErrors({LocalState}) {
    return LocalState.set('loginError', null);
  }
}
