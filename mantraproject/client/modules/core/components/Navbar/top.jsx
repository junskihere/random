import React from 'react';

class NavBar extends React.Component {
  componentDidMount(){
    $(".button-collapse").sideNav();
  }
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Juns-Kis Mantra</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Gwapo</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                    <li>
                        <a href="#">Pwede na</a>
                    </li>
                    <li>
                        <a href="#">Sige nalang</a>
                    </li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li>
                        <a href="#">Gwapo</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                    <li>
                        <a href="#">Pwede na</a>
                    </li>
                    <li>
                        <a href="#">Sige nalang</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default NavBar;
