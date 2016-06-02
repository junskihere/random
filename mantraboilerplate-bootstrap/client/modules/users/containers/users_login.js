import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersLogin from '../components/users_login';

export const composer = ({context,clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("main_error",null);
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  userLogin:actions.users.userLogin,
  clearErrors:actions.users.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersLogin);
