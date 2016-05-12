import React from 'react';
import NavBar from './Navbar/top.jsx';
import Footer from './Navbar/footer.jsx';
const Layout = ({content = () => null }) => (
  <div>
    <NavBar />
      <main>
    <div className="container">

      {content()}

    </div>
    </main>

  </div>
);

export default Layout;
