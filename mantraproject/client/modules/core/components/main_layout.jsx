import React from 'react';
import NavBar from './Navbar/top.jsx';
import Footer from './Navbar/footer.jsx';
const Layout = ({content = () => null }) => (
  <div>
    <NavBar />
      <main>
      {content()}
    </main>

  </div>
);

export default Layout;
