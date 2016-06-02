const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../posts';
import {Class} from 'meteor/jagi:astronomy';


describe('posts.containers.posts', () => {
  describe('composer', () => {

        it('should subscribe to posts', () => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});

          const context = () => ({Meteor});
          const onData = spy();

          composer({context}, onData);
          expect(Meteor.subscribe.args[0]).to.deep.equal([
            'posts'
          ]);
  });
});
