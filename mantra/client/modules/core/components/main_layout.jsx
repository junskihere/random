import React from 'react';
import TopNav from './navigator/topnav.jsx';

export default class extends React.Component {
  render () {
    const { content } = this.props;
    return (
      <div>
        <TopNav />
        <div className="container">
          {content()}
        </div>
      </div>
    );
  }
}
