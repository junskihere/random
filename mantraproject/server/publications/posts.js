import {Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Post from '/lib/collections/posts.js';

export default function () {
  Meteor.publish('posts', function () {
    return Post.find();
  });

  Meteor.publish('posts.view', function (postId) {
    return Post.find(postId);
  });
}
