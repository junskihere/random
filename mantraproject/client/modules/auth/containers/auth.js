import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Auth from '../components/auth.jsx';

export const composer = ({context}, onData) => {
  const { authCommon } = context();

  const { userSubReady,  userId, user, profile} = authCommon();

  if (userSubReady) {
    const data = {
      userId,
      user,
      profile,
    };

    onData(null, data);

  }  else {

      const waitingForAuthData = true;
      const data = {
        waitingForAuthData,
      };
      onData(null, data);
    }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Auth);
