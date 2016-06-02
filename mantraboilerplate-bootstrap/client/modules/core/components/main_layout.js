import React from 'react';

import NavBar , {NavBarLogOut} from './nav_bar';

class Layout extends React.Component {
  render() {
    const {content,userId, Meteor} = this.props;
    return (
      <div>
        <div>
          {userId ?   <NavBar Meteor={Meteor} /> :   <NavBarLogOut /> }

          <div className="container marginTop">
            {content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
