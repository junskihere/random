import React from 'react';

import AddPostButton from './addpostbutton.jsx';



class Posts extends React.Component{

  render() {
    const {posts,loadingpage} = this.props;
    const { waitingForSubscriptions } = this.props;
       if(waitingForSubscriptions){
               return(
                 <div className="container">
                        <div className="row ">
                          {loadingpage()}
                       </div>
                  </div>
               );
       }

    return(
      <div className="container">
      <div className="row ">
        <div className="card-panel  blue-grey lighten-5 valign center z-depth-4"><h4>List of Posts</h4></div>
      </div>
      <div className="row  z-depth-4 ">
              <PostLists posts={posts} />
        </div>
            <AddPostButton />
      </div>
    );
  }

  componentDidUpdate(){
    $('.collapsible').collapsible({
      accordion : true ,// A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }
}


 const PostLists  = ({posts}) => (

  <ul className="collapsible collection  popout" data-collapsible="accordion">
        {posts.map( post  => (
        <li className="collection-item avatar  blue darken-3" key={post._id}>
         <img src="https://materiell.com/wp-content/uploads/2015/03/john-small.png" alt="" className="circle " />
          <div className="collapsible-header  blue darken-3"><h5>{post.title}</h5></div>
          <div className="collapsible-body "><p className="truncate">{post.body}<br /><br /><br /><a  className="right" href={"/viewpost/"+post._id}>view</a></p></div>
        </li>
        ))
    }
  </ul>
);



export default Posts;
