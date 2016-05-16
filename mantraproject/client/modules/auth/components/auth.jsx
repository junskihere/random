import React from 'react';

class Auth extends React.Component{
    render() {
      const {MainLayout, content, userId} = this.props
      const DisplayContent = () => (
          <div>
            <MainLayout  content={content}/>
          </div>
      );
        if(!userId){
            FlowRouter.go("/register");
        }
        return(
            DisplayContent()
        );

    }
}
export default Auth;
