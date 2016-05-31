import { Class } from 'meteor/jagi:astronomy';
import {Mongo} from 'meteor/mongo';

const Posts = new Mongo.Collection("posts");

const Post = Class.create({
    name : "Post",
    collection : Posts,
    fields : {
      title :{
          type : String,
          validators: [{
              type: 'minLength',
              param: 10,
              message: 'The title is too short! (min of 10 characters)',
          }],
      } ,
      user_id : String,
      body : {
          type : String,
          validators: [{
              type: 'minLength',
              param: 100,
              message: 'The body is too short! (min of 100 characters)',
          }],
      } ,
      createdAt : Date,
    },
});

export default Post;
