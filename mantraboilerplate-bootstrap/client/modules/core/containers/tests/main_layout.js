const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';

import {composer, depsMapper} from '../main_layout';

describe('core.containers.main_layout', () => {

  context = {};

  beforeEach(function(){

    const LocalState = {get: spy()};

    this.context = function(){
      return {
        LocalState,
        authCommon: function(){

          return {
            userSubReady: spy(),
            userId: "12121-my-id",
            user: spy()
          }
        }
      }
    };

  });

  it("should check data type on onData Method", function(){


    const onData = spy();

    context = this.context;
    composer({context}, onData);

    expect(onData.args).to.be.a('array');

  });

  it("should expect user id value on onData Method", function(){

    const onData = spy();

    context = this.context;
    composer({context}, onData);

    expect(onData.args[0][1].userId).to.be.equal("12121-my-id");

  })



});
