import React from 'react';
import {mount} from 'react-mounter';
import {AuthCheck} from '/client/configs/components.js';


import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(AuthCheckCtx, {
        MainLayout, content: () => (<Home />)
      });
    }
  });
}
