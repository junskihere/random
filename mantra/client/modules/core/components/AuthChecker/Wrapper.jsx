import React from 'react';


import Component from './Component.jsx';
import {authComposer} from '/client/configs/composer.js';
const ComponentCtx = authComposer(Component);


export default class extends React.Component {

  render() {

    const {
      content,
      LayoutDefault,
      // LayoutComponent
    } = this.props;

    const displayLoading = () => (
      <LayoutDefault
        content={() => (<span>Loading</span>)}
      />
    );

    const displayLogin = () => (
      <LayoutDefault
        content={() => (<span>Login</span>)}
      />
    );

    const displayDenied = () => (
      <LayoutDefault
        content={() => (<span>Acces Denied</span>)}
      />
    );

    const displayContent = () => (
      <LayoutDefault
        content={content}
      />
    );

    return (
      <ComponentCtx
        {...this.props}
        displayLoading={displayLoading}
        displayLogin={displayLogin}
        displayDenied={displayDenied}
        displayContent={displayContent}
      />
    );
  }
}
