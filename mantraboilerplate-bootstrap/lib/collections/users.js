import SimpleSchema from 'node-simple-schema';

/**
 * Users schema
 */


SimpleSchema.messages({
  regex : [{msg: "[label] must be valid."}],
})
const User = new SimpleSchema({

  profile: {
    type: Object,
    optional: true,
    label : "Porfile",
  },

  "profile.profilename" : {
      type: String,
      min : 1,
      label : "Profilename",
  },

  "profile.firstname" : {
    type : String,
    label:"Firstname",
    min : 1,
  },

  "profile.lastname" : {
    type : String,
    min : 1,
    label : "Lastname",
  },

  "profile.gender" : {
    type:String,
    allowedValues: ["male", "female"],
    label: "Gender",
  },

  "profile.age" : {
    type: Number,
    label: "Age",
    min: 18,
    max: 99,
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },

  emails: {
    type: Array,
    optional: true,
    label: "Email",
  },

  "emails.$": {
    type: Object,
  },

  "emails.$.address": {
    label : "Email Addess",
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },

  "emails.$.verified": {
    type: Boolean,
  },

  password: {
      type: String,
      label: "Password",
      min: 6,
      max: 20,
  },

  modifiedAt : {
    type:Date,
    label : "ModifiedAt",
    defaultValue : new Date(),
  },

  createdAt : {
    type:Date,
    label : "CreatedAt",
    defaultValue: new Date(),
  },

});

export default  User ;
