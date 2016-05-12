import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import RegisterPage from './containers/register.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/register', {
    name: 'Register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<RegisterPage />)
      });
    }
  });
}
