import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Register from '../register.jsx';

//import '/public/css/materialize.min.css';

storiesOf('accounts.Register', module)
  .add('default view', () => (
    <Register  />
  ))
  .add('firstname required', () =>{
    const error = 'Firstname is required';
    return(
      <Register error={error}  />

    );
  })
  .add('lastname required', () =>{
    const error = 'Lastname is required';
    return(
      <Register error={error}  />
    );
  })
  .add('email is required', () =>{
    const error = 'email is required';
    return(
      <Register error={error}  />
    );
  })
  .add('password is required', () =>{
    const error = 'Password is required';
    return(
      <Register error={error}  />
    );
  })

  .add('password did not match', () =>{
    const error = 'Password did not match';
    return(
      <Register error={error}  />
    );
  })
