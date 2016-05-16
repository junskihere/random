import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Auth from '../components/auth.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState, authCommon} = context();

  const { userSubReady,  userId, user, profile} = authCommon();

  if (userSubReady) {
    const data = {
      userId,
      user,
      profile
    };

    onData(null, data);

  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Auth);
