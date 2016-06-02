import React from 'react';
import NavBar from './Navbar/top.jsx';
//import Footer from './Navbar/footer.jsx';


class Layout extends React.Component {
  render() {
      const {content, Meteor} = this.props;
      return(
        <div>
          <NavBar Meteor={Meteor} />
            <main>
            {content()}
          </main>

        </div>
      );
  }
}



export default Layout;
