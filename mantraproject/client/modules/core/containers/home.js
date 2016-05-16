import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Post from '/lib/collections/posts.js';
import Home from '../components/home.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('posts').ready()) {
    const posts = Post.find();
    onData(null,{posts});
  }
  return;
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
