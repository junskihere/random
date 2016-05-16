import React from 'react';
import {mount} from 'react-mounter';
import Auth from '/client/modules/auth/containers/auth.js';
import MainLayout from './components/main_layout.jsx';
import Home from './containers/home.js';

export default function (injectDeps, {FlowRouter}) {
  const AuthCheck = injectDeps(Auth);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(AuthCheck, {
        MainLayout,  content: () => (<Home />)
      });

    }
  });
}
