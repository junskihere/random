import React from 'react';

class Login extends React.Component{
  render() {
    const {error} = this.props;
    return (
      <div className="container">
      <div className="row">
            {error ?  <div className="card-panel red lighten-1">{error}</div>: null}
      </div>
        <div className="row">
        <div className="col s12 " >
            <div className="card blue lighten-5" >


                <form  onSubmit={this.Login.bind(this)}>
                  <div className="card-content">
                      <span className="card-title">Login</span>
                          <div className="row">
                            <div className="input-field col s12">
                              <input ref="email" id="email" type="text" className="" />
                              <label for="email">email</label>
                            </div>
                            </div>

                            <div className="row">
                              <div className="input-field col s12">
                                <input ref ="password" id="pasword" type="password"  className="" />
                                <label for="pasword">password</label>
                              </div>
                          </div>
                    </div>


                    <div className="card-action center">
                      <button type="submit" className="waves-effect waves-light btn blue darken-3">login</button>
                      <div className="right">
                        <a  style={{color:"#1a237e"}}  href="/register">register</a>
                      </div>
                    </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    );
  }

  Login(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {loginuser} = this.props;
    const {email, password} = this.refs;

    loginuser({email:email.value, password:password.value});
  }


}

export default Login;
