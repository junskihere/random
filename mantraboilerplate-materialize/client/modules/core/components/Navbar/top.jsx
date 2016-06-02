import React from 'react';
//https://unsplash.com/ source of images free
class NavBar extends React.Component {
  componentDidMount(){
    $(".button-collapse").sideNav({
      menuWidth: 150, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.posts-dropdown').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: false, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
     alignment: 'left', // Displays dropdown with edge aligned to the left of button
   });
   $('.posts-dropdown-mobile').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right', // Displays dropdown with edge aligned to the left of button
  });
  }
  render() {
    const {Meteor} = this.props;
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
                <a href="/" className="brand-logo">Juns-Kis Mantra</a>
                <a href="#" data-activates="mobile-demo" className="right button-collapse">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down ">
                    <li>
                        <a  className="posts-dropdown" data-activates='postsDropdown1' href="#">Posts<i className="material-icons right">arrow_drop_down</i></a>
                          <ul id='postsDropdown1' className='dropdown-content'>
                            <li><a href="/posts">Browse Posts</a></li>
                            <li><a href="/addpost">Add Post</a></li>
                          </ul>
                    </li>
                    <li>
                        { Meteor.userId() ? <a href="#" onClick={this.Logout.bind(this)}>logout<i className="small material-icons left">power_settings_new</i></a> : <a href="/login">login<i className="small material-icons left">vpn_key</i></a> }
                    </li>
                </ul>
                <ul className="right side-nav light-blue lighten-5" id="mobile-demo">
                <li>
                    <a   href="/">Home<i className="material-icons left">store</i></a>
                </li>
                    <li>
                        <a   href="/posts">Posts<i className="material-icons left">library_books</i></a>
                    </li>
                    <li>
                         { Meteor.userId() ? <a href="#" onClick={this.Logout.bind(this)}>logout<i className="small material-icons left">power_settings_new</i></a> : <a href="/login">login<i className="small material-icons left">vpn_key</i></a> }
                    </li>
                </ul>
            </div>
        </nav>
    );
  }

  Logout(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {Meteor} = this.props;
    Meteor.logout();

  }
}

export default NavBar;
