import {composeWithTracker} from 'react-komposer';
import PostList from '/client/components/postsList.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe("posts");
  if (handle.ready()) {
    const posts = Posts.find().fetch();
    onData(null, {posts});
  };
};

export default composeWithTracker(composer)(PostList);
