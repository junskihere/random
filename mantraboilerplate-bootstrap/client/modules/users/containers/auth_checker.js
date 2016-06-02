import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import AuthChecker from '../components/auth_checker';

export const composer = ({context }, onData) => {
  const {authCommon, FlowRouter , Meteor} = context();
  const {  userSubReady, userId,  user } = authCommon();
  if(userSubReady){
    const data = {  userId, user , FlowRouter, Meteor};
    onData(null, data);
  }

};


export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AuthChecker);
