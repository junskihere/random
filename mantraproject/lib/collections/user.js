import { Class } from 'meteor/jagi:astronomy';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

const User = Class.create({
    name : "User",
    collection : Meteor.users,
    fields : {
      firstname : String,
      lastname : String,
      email : [Object],
      password : String,
      createdAt : Date,
    },
    events : {
        beforeInsert(e){

            if(Meteor.isServer){
                e.preventDefault();
                Accounts.onCreateUser((options, user) => {
                    user.firstname = options.firstname;
                    user.lastname = options.lastname;
                    return user;
                });

              Accounts.createUser({
                    firstname : e.currentTarget.firstname,
                    lastname : e.currentTarget.lastname,
                    email : e.currentTarget.email,
                    password : e.currentTarget.password,
                    createdAt : new Date(),
                });

            }




        },
    }

});

export default User
