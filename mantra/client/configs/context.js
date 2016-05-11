import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import _ from 'lodash';

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();


  const userId = Meteor.uuid() || null;
  const user = Meteor.uuid();
  const profile = _.get(Meteor.uuid(), 'profile', {} );
  const email = _.get(Meteor.uuid(), 'emails[0].address', {});

  return {
    userSubReady,
    userId,
    user,
    email,
    profile,
  };

};


export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    authCommon,
  };
}
