const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../users';
import _ from "underscore";

import User from '/lib/collections/users';

describe('users.actions.userSignup', () => {
  const formData = {
    "emails.$.address" : "junskihere@gmail.com",
    "password" : "password",
    "profile.profilename" :  "value",
    "profile.gender" :  "male",
    "profile.age" :  19,
    "modifiedAt" : new Date(),
    "createdAt" : new Date(),
  }
  const LocalState = {set : spy()};

  it("it should do a Meteor call and no Error", ()=> {
      const Meteor =  {uuid: () => 'id', call: stub()};
      actions.userSignup({Meteor,LocalState,User, _},formData);
      expect(LocalState.set.args).to.have.length(0);
  });

  it("it should give a main_error", ()=>{
      formData["emails.$.address"] = "this is not a valid email";
      LocalState.set("main_error","Error");
      expect(LocalState.set.args[0]).to.deep.equal(["main_error" , "Error"]);
  });

  it("it should say invalid email", ()=>{
      formData["emails.$.address"] = "this is not a valid email";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[1]).to.deep.equal(["emails.$.address" , "Email Addess must be a valid e-mail address"]);
  });

  it("it should say password must be atleast 6 characters", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "four";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[2]).to.deep.equal(["password" , "Password must be at least 6 characters"]);
  });

  it("it should say profilemustbe at least 1 char", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[3]).to.deep.equal(["profile.profilename" , "Profilename must be at least 1 characters"]);
  });

  it("it should say gay is not allowed value on gender", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = "gay";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[4]).to.deep.equal(["profile.gender" , "gay is not an allowed value"]);
  });

  it("it should say password must be atleast 6 characters", ()=>{
      formData["emails.$.address"] = "jun@mail.com";
      formData["password"] = "password";
      formData["profile.profilename"] = "profilename";
      formData["profile.gender"] = "male";
      formData["profile.age"] = "not allowed age";
      actions.userSignup({LocalState,User, _},formData);
      expect(LocalState.set.args[5]).to.deep.equal(["profile.age" , "Age must be a number"]);
  });



});
