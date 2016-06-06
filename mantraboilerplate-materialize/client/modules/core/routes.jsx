import React from 'react';
import {mount} from 'react-mounter';
import Layout from './containers/main_layout.js';
import Home from './components/home.jsx';
import Notfound from './components/notfound.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.notFound = {
    action() {
        mount(Notfound)
    },
  };

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
          content: () => (<Home />),
      });
    },
  });


}
