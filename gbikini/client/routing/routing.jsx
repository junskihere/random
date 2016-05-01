import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';
import PostList from '/client/containers/postsList.js';

FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      header: <Navbar/>,
      content: <Content name="Ethan"/>,
      footer: <Footer/>
    });
  }
});

FlowRouter.route("/routes", {
  action () {
    mount(MainLayout, {
      header: <Navbar />,
      content: <PostList />,
      footer: <Footer />
    });
  }
});
