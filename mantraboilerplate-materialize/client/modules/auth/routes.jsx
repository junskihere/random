import React from 'react';
import {mount} from 'react-mounter';

import Layout from '/client/modules/core/containers/main_layout.js';
import RegisterPage from './containers/register.js';
import Login from './containers/login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/register', {
    name: 'Register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<RegisterPage />),
      });
    },
  });

  FlowRouter.route('/login', {
    name: 'Login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });

}
