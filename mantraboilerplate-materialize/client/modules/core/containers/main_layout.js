import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Layout from '../components/main_layout.jsx';

export const composer = ({context}, onData) => {
 const { Meteor } = context();
 const data = {
   Meteor,
 }
  onData(null,data);
  return;
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Layout);
