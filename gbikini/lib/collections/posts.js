import { Class } from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');
export const Post = Class.create({
  name : 'Post',
  collection : Posts,
  fields : {
    title : {
      type:String,
      validators : [{
        type : 'gte',
        param : 3,
      }],
    },
    userId : String,
    publishAt : Date,
    craetedAt : Date,
  },
  behaviors : {
    timestamp : {}
  }
});
