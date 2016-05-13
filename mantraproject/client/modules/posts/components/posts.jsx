import React from 'react';

import AddPostButton from './addpostbutton.jsx';



class Posts extends React.Component{
  componentDidMount(){
    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }
  render() {
    const {posts} = this.props;
    return(
      <div>
      <div className="row">
        <div className="card-panel  blue-grey lighten-5 valign center"><h4>Posts</h4></div>
      </div>
      <div className="row">
              <PostLists posts={posts} />
        </div>
            <AddPostButton />
      </div>
    );
  }
}


const PostLists  = ({posts}) => (

  <ul className="collapsible collection  popout" data-collapsible="accordion">
        {posts.map( post  => (
        <li className="collection-item avatar red lighten-2" key={post._id}>
         <img src="https://materiell.com/wp-content/uploads/2015/03/john-small.png" alt="" className="circle " />
          <div className="collapsible-header red lighten-2"><h5>{post.title}</h5></div>
          <div className="collapsible-body "><p>{post.body}</p></div>
        </li>
        ))
    }
  </ul>
);



export default Posts ;
