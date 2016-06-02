import React from 'react';


class Register extends React.Component{
  render() {
      const {error} =this.props;

    return (
      <div className="container">
      <div className="row">
            {error ?  <div className="card-panel red lighten-1">{error}</div>: null}
      </div>

          <div className="row">
            <div className="col s12 ">
              <div className="card blue lighten-5">
              <form  onSubmit={this.registerUser.bind(this)}>
                  <div className="card-content">
                    <span className="card-title">Register</span>
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
                  </div>

                    <div className="card-action center">
                      <button type="submit" className="waves-effect waves-light btn blue darken-3" >Register Boom</button>
                      <div className="right">
                        <a href="/login" style={{color:"#1a237e"}} >Login</a>
                      </div>
                    </div>

              </form>

            </div>
          </div>
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
