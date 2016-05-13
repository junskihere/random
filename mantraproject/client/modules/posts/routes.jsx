import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Posts from './containers/posts.js';
import AddPost from './containers/addpost.js';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/posts', {
    name: 'posts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Posts />)
      });
    }
  });

  FlowRouter.route('/addpost', {
    name: 'addposts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddPost />)
      });
    }
  });


  FlowRouter.route('/editporst', {
    name: 'editposts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddPost />)
      });
    }
  });

  FlowRouter.route('/removepost', {
    name: 'removeposts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddPost />)
      });
    }
  });

}
