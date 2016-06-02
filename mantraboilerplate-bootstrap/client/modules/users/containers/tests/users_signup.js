const { describe, it } = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../users_signup';

describe('users.containers.usersSignup', () => {
  describe('composer', () => {

    it('should get Errors from local state', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      composer({context}, spy());
      const args = LocalState.get.args;
      expect(args).to.have.length(8);

      expect(args[0]).to.be.deep.equal([ "profile.profilename", null ]);
      expect(args[1]).to.be.deep.equal([ "profile.firstname", null ]);
      expect(args[2]).to.be.deep.equal([ "profile.lastname", null ]);
      expect(args[3]).to.be.deep.equal([ "emails.$.address", null ]);
      expect(args[4]).to.be.deep.equal([ "password", null ]);
      expect(args[5]).to.be.deep.equal([ "profile.age", null ]);
      expect(args[6]).to.be.deep.equal([ "profile.gender", null ]);
      expect(args[7]).to.be.deep.equal([ "main_error", null ]);

    });

    it('it should be able to call onData with null and {error}', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();
      composer({context}, onData);
      const args = onData.args[0];
      const ErrorObject = {
        profilename: 'error',
        firstname: 'error',
        lastname: 'error',
        email: 'error',
        password: 'error',
        age: 'error',
        gender: 'error',
        error: 'error' ,
                      };
      expect(args[0]).to.be.equal(null);
      expect(args[1].errorField).to.be.deep.equal(ErrorObject);

    });

    it('should return clearErrors', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const clearErrors = spy();
      const clearFunc = composer({context, clearErrors}, spy());
      expect(clearFunc).to.be.equal(clearErrors);
    });
  });

  describe('depsMapper', () => {
    describe('actions', () => {

      it('should map users.userSignup', () => {
        const actions = {users: {userSignup: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.userSignup).to.be.equal(actions.users.userSignup);
      });

      it('should map users.clearErrors', () => {
        const actions = {users: {clearErrors: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.clearErrors).to.be.equal(actions.users.clearErrors);
      });

      it('should map users.validateInputField', () => {
        const actions = {users: {validateInputField: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.validateInputField).to.be.equal(actions.users.validateInputField);
      });
  });


    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {users: {userSignup: spy(), clearErrors: spy(), validateInputField:spy()}};
        const context = spy();
        const deps = depsMapper(context, actions);
        expect(deps.context()).to.be.equal(context);
      });
    });
  });

});
