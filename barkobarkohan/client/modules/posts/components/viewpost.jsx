import React from 'react';




const Viewpost = ({post}) => (
  <div className="container">
      <div className="cols s12 ">
      {
        post ?
        <div>
            <div className="row center">
              <h1>{post.title}</h1>
            </div>

            <div className="row valign">
              <p className="justify">{post.body}</p>
            </div>
        </div>

        :

        <div className="row center">
          <h1>Post not found</h1>
        </div>
      }
      </div>
  </div>
);

export default Viewpost;
