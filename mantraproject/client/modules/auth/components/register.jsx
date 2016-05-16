import React from 'react';


class Register extends React.Component{
  render() {
      const {error} =this.props;

    return (
      <div className="container">
      <div className="row">
        <div className="card-panel  blue-grey lighten-5 valign center z-depth-4"><h4>Register ma Men.</h4></div>
      </div>
      <div className="row">
            {error ?  <div className="card-panel red lighten-1">{error}</div>: null}
      </div>
      <div className="row">

      <form className="col s12" onSubmit={this.registerUser.bind(this)}>

      <div className="row">
      <div className="input-field col s6">
        <input  ref="firstName" type="text" className="validate" />
        <label for="firstName">First Name</label>

      </div>
      <div className="input-field col s6">
        <input ref="lastName" type="text" className="validate" />
        <label for="lastName">Last Name</label>

      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input ref="email" type="email" className="validate"  />
        <label for="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input ref="password" type="password" className="validate" />
        <label for="password">Password</label>
      </div>
    </div>

    <div className="row">
      <div className="input-field col s12">
        <input ref="confirmPassword" type="password" className="validate" />
        <label for="confirmPassword">Confirm Password</label>
      </div>
    </div>
      <button type="submit" className="waves-effect waves-light btn" >Register Boom</button>
      </form>
      </div>
      </div>

    );


  }

  registerUser(event){

    if(event && event.preventDefault){
      event.preventDefault();
    }


    const {register} = this.props;
    const {firstName, lastName, email, password, confirmPassword} = this.refs;

    const data = {
      firstName : firstName.value,
      lastName : lastName.value,
      password : password.value,
      email : email.value,
      confirmPassword : confirmPassword.value,
    }

    register(data);



  }
}

export default Register;
