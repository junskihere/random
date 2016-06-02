import { Class } from 'meteor/jagi:astronomy';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
Meteor.startup(function(){
    if(Meteor.isServer){
        Accounts.onCreateUser((options, user) => {
            user.firstname = options.firstname;
            user.lastname = options.lastname;
            return user;
        });
    }
});



const User = Class.create({
    name : "User",
    collection : Meteor.users,
    fields : {
      firstname : String,
      lastname : String,
      emails : [Object],
      password : String,
      createdAt : Date,
    },
    events : {
        beforeInsert(e){

        if(Meteor.isServer){
                e.preventDefault();
              Accounts.createUser({
                    firstname : e.currentTarget.firstname,
                    lastname : e.currentTarget.lastname,
                    email : e.currentTarget.email,
                    password : e.currentTarget.password,
                    createdAt : new Date(),
                });
        }
     },
 },

});


// const User = Class.create({
//     name : "User",
//     collection : Meteor.users,
//     fields : {
//       firstname : String,
//       lastname : String,
//       emails : {
//           type : [Object],
//           optional : true,
//       },
//       password : String,
//       createdAt : Date,
//     },
//     events : {
//         afterInsert(e){
//                 Accounts.createUser({
//                       emails: e.currentTarget.email,
//                       password : e.currentTarget.password,
//                   });
//      },
//     }
//
// });



export default User
