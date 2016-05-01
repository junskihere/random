import React from 'react';

const CardItem = ({name}) =>(
    <div className="col s6 m2">
      <div className="card blue">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <p></p>
        </div>
    </div>
  </div>
);

const PostList = ({posts}) =>(
        <div className="row">
          {posts.map(({name}) => (
            <CardItem name={name} />
          ))}
        </div>
);

export default PostList;
