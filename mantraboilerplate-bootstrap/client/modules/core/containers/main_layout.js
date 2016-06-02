import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Layout from '../components/main_layout';

export const composer = ({context}, onData) => {
  const {authCommon, Meteor} = context();
  const {  userSubReady, userId,  user } = authCommon();
  if(userSubReady){
    const data = {  userId, user, Meteor};

    onData(null, data);
  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Layout);
