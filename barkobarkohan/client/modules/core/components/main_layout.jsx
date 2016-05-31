import React from 'react';
import NavBar from './Navbar/top.jsx';
//import Footer from './Navbar/footer.jsx';


class Layout extends React.Component {
  render() {
      const {content} = this.props;

      return(
        <div>
          <NavBar />
            <main>
            {content()}
          </main>

        </div>
      );
  }
}



export default Layout;
