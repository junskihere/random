import React from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import Navbar,{SideNavbar,DropdownNavbar,Mobilecollapse} from '/client/components/navbar.jsx';

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


FlowRouter.route("/sidebarsample", {
  action () {
    mount(MainLayout, {
      header: <SideNavbar />,
      content: <PostList />,
      footer: <Footer />
    });
  }
});


FlowRouter.route("/sidebarsample2", {
  action () {

    mount(MainLayout, {
      header: <DropdownNavbar />,
      content: <PostList />,
      footer: <Footer />
    });
    $(".dropdown-button").dropdown();
  }
});


FlowRouter.route("/sidebarsample3", {
  action () {
     $(".button-collapse").sideNav();
    mount(MainLayout, {
      header: <Mobilecollapse />,
      content: <PostList />,
      footer: <Footer />
    });

  }
});
