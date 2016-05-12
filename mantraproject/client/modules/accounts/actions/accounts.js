export default {
  register({Meteor, LocalState, FlowRouter},formData) {

   if(_.isEmpty(formData.firstName)){
      return LocalState.set('SAVING_ERROR', 'Firstname is required.');
   }
   if(_.isEmpty(formData.lastName)){
      return LocalState.set('SAVING_ERROR', 'Lastname is required.');
   }
   if(_.isEmpty(formData.email)){
      return LocalState.set('SAVING_ERROR', 'email is required.');
   }
   if(_.isEmpty(formData.password)){
      return LocalState.set('SAVING_ERROR', 'password is required.');
   }
   if(formData.password != formData.confirmPassword){
     return LocalState.set('SAVING_ERROR', 'password did not match.');
   }
  LocalState.set('SAVING_ERROR', null);

  Meteor.call('accounts.register', _.extend({uuid:Meteor.uuid()},formData), (err) => {
    if(err && err.message != "Operation prevented [prevented]"){
      return LocalState.set('SAVING_ERROR', err.message);
    }
     Meteor.loginWithPassword(formData.email, formData.password);
  });

  if(Meteor.user()){
    FlowRouter.go('/');
  }



},

clearErrors({LocalState}) {
  return LocalState.set('SAVING_ERROR', null);
}
}
