import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Post from '/lib/collections/posts.js';


import Viewpost from '../components/viewpost.jsx';

export const composer = ({context , postId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("post.view",postId).ready()){
    const post = Post.findOne({_id:postId});
    onData(null, {post});
  }

  return;
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Viewpost);
