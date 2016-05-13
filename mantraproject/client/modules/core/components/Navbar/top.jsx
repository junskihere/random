import React from 'react';

class NavBar extends React.Component {
  componentDidMount(){
    $(".button-collapse").sideNav();
    $('.posts-dropdown').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: false, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
     alignment: 'left' // Displays dropdown with edge aligned to the left of button
   });
   $('.posts-dropdown-mobile').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right' // Displays dropdown with edge aligned to the left of button
  });
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
                        <a  className="posts-dropdown" data-activates='postsDropdown1' href="#">Posts</a>
                          <ul id='postsDropdown1' className='dropdown-content'>
                            <li><a href="/posts">Browse Posts</a></li>
                            <li><a href="/addpost">Add Post</a></li>
                          </ul>
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
                        <a  className="posts-dropdown-mobile" data-activates='postsDropdown2' href="#">Posts</a>
                          <ul id='postsDropdown2' className='dropdown-content'>
                            <li><a href="/posts">Browse Posts</a></li>
                            <li><a href="/addpost">Add Post</a></li>
                          </ul>
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
