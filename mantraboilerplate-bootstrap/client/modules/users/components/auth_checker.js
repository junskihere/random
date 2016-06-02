import React from 'react';
class AuthChecker extends React.Component{
    render() {
      const {MainLayout, content, userId ,FlowRouter, Meteor} = this.props;
        if(!userId){
            FlowRouter.go("/users/login");
        }
        return(
            <div>
              <MainLayout Meteor={Meteor} content={content} userId={userId} />
            </div>
        );

    }
}

export default AuthChecker;
