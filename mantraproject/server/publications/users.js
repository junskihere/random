import User from '/lib/collections/user.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.current', function () {
    return User.find(this.userId);
  });
}
