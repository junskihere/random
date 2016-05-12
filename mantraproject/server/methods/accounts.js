import  User from '/lib/collections/user.js';
import {Meteor} from 'meteor/meteor';
export default function () {
  Meteor.methods({
    'accounts.register'(data) {
       const user = new User();
       user.firstname = data.firstName;
       user.lastname = data.lastName;
       user.password = data.password;
       user.email = data.email;
       user.createdAt = new Date();
      // user.data = data;
       user.save();
    }
  });
}
