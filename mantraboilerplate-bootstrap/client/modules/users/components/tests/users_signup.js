//
// const {describe, it} = global;
// import {expect} from 'chai';
// import {shallow} from 'enzyme';
// import UsersSignup from '../users_signup';
//
// describe('core.components.users_signup', () => {
//
//   /* Component properties */
//   const errorField = {
//     error: null,
//     email: null,
//     password: null,
//     username: null,
//     firstname: null,
//     lastname: null,
//     gender: null,
//     age: null,
//   };
//
//   let ageArray = [ {age: 18}, {age: 19}, {age: 20} ];
//
//   it('should display error message if there are any', () => {
//     errorField.email = 'ErrorOnField';
//
//     const el = shallow(<UsersSignup
//       errorField={errorField}
//       getAgeoptions={ageArray}
//       />);
//
//     expect(el.html()).to.match(/has-error/);
//   });
//
//   it('should show error on field if there are any', () => {
//     errorField.email = 'ErrorOnField';
//
//     const el = shallow(<UsersSignup
//       errorField={errorField}
//       getAgeoptions={ageArray}
//       />);
//
//     expect(el.html()).to.match(/ErrorOnField/);
//   });
//
//   it('should show invalid age object', () => {
//     ageArray = null;
//
//     const el = shallow(<UsersSignup
//       errorField={errorField}
//       getAgeoptions={ageArray}
//       />);
//
//     expect(el.html()).to.match(/Invalid Age Object/);
//   });
//
//   it('should display registration form', () => {
//     const el = shallow(<UsersSignup
//       errorField={errorField}
//       getAgeoptions={ageArray}
//       />);
//
//     const email = el.find('#inputEmail').first();
//     const password = el.find('#inputPassword').first();
//     const form = el.find('form').first();
//
//     expect(email.node.ref).to.be.equal('email');
//     expect(password.node.ref).to.be.equal('password');
//     expect(form.prop('onSubmit')).to.be.a('function');
//   });
//
//   it('should create a new user account', done => {
//     const formData = {
//       'emails.$.address': 'toinks@mail.com',
//       password: 'tmp12345',
//       'profile.profilename': 'toinksman',
//       'profile.firstname': 'toinks',
//       'profile.lastname': 'man',
//       'profile.gender': 'male',
//       'profile.age': 18,
//     };
//
//     const onCreate = (userData) => {
//       expect(userData['emails.$.address']).to.be.equal(formData['emails.$.address']);
//       expect(userData.password).to.be.equal(formData.password);
//       expect(userData['profile.profilename']).to.be.equal(formData['profile.profilename']);
//       expect(userData['profile.firstname']).to.be.equal(formData['profile.firstname']);
//       expect(userData['profile.lastname']).to.be.equal(formData['profile.lastname']);
//       expect(userData['profile.gender']).to.be.equal(formData['profile.gender']);
//       expect(userData['profile.age']).to.be.equal(formData['profile.age']);
//       done();
//     };
//
//     const el = shallow(<UsersSignup
//       errorField={errorField}
//       getAgeoptions={ageArray}
//       userSignup={onCreate}
//       />);
//
//     const instance = el.instance();
//
//     instance.refs = {
//       email: {value: formData['emails.$.address']},
//       password: {value: formData.password},
//       profilename: {value: formData['profile.profilename']},
//       firstname: {value: formData['profile.firstname']},
//       lastname: {value: formData['profile.lastname']},
//       gender: {value: formData['profile.gender']},
//       age: {value: formData['profile.age']},
//     };
//
//     el.find('form').simulate('submit');
//   });
// });
