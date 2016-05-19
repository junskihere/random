import React from 'react';

class Auth extends React.Component{
    render() {
      const {MainLayout, content, userId, userSubReady} = this.props
      const DisplayContent = () => (
          <div>
            <MainLayout  content={content}/>
          </div>
      );
        if(userSubReady && !userId){
            FlowRouter.go("/");
        }
        return(
            DisplayContent()
        );

    }
}
export default Auth;
