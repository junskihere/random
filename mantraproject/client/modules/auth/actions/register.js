import User from '/lib/collections/user.js';
export default {
  register({Meteor, LocalState, FlowRouter},formData) {


  LocalState.set('SAVING_ERROR', null);

  Meteor.call('accounts.register', _.extend({uuid:Meteor.uuid()},formData), (err) => {
    if(err && err.message != "Operation prevented [prevented]"){
      return LocalState.set('SAVING_ERROR', err.message);
    }
     Meteor.loginWithPassword(formData.email, formData.password,(err)=>{
       if(err){
         return LocalState.set('SAVING_ERROR', err.message);
       }
       FlowRouter.go('/');
     });
  });



 //  const user = new User();
 //  user.firstname = formData.firstName;
 //  user.lastname = formData.lastName;
 //  user.password = formData.password;
 //  user.emails = formData.email;
 //  user.createdAt = new Date();
 // // user.data = data;
 //  user.save((err) => {
 //    console.log(err);
 //
 //  });

},

clearErrors({LocalState}) {
  return LocalState.set('SAVING_ERROR', null);
}
}
