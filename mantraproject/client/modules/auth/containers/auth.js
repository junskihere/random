// import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
//
// import Auth from '../components/auth.jsx';
//
// export const composer = ({context}, onData) => {
//   const {Meteor, Collections, LocalState, authCommon} = context();
//
//   const { userSubReady,  userId} = authCommon();
//
//   const LoadDummyData = LocalState.get('Developer.LoadDummyData');
//   const DeveloperMode = LocalState.get('Developer.DeveloperMode');
//
//   if (userSubReady) {
//     const data = {
//       LoadDummyData,
//       DeveloperMode,
//       userId,
//       user,
//       profile
//     };
//
//     onData(null, data);
//
//   } else {
//
//     const waitingForAuthData = true;
//     const data = {
//       LoadDummyData,
//       DeveloperMode,
//       waitingForAuthData
//     };
//     onData(null, data);
//   }
//
//
//
//
//   onData(null, {});
// };
//
// export const depsMapper = (context, actions) => ({
//   context: () => context
// });
//
// export default composeAll(
//   composeWithTracker(composer),
//   useDeps(depsMapper)
// )(Auth);
//
//
//
// import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
//
// export const _authComposer = ({context}, onData) => {
//
//   const {LocalState, authCommon} = context();
//
//
//
// };
//
// export const _authDepsMapper = (context) => ({
// // export const _authDepsMapper = (context, actions) => ({
//   // toggleLoadDummyData: actions.Developer.toggleLoadDummyData,
//   // toggleDeveloperMode: actions.Developer.toggleDeveloperMode,
//   context: () => context
// });
//
// export default (component) => composeAll(
//     composeWithTracker(_authComposer),
//     useDeps(_authDepsMapper)
//   )(component);
