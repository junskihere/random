import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
class Auth extends React.Component{
    render() {
      const {MainLayout, content, userId, Meteor} = this.props
      const { waitingForAuthData } = this.props;

      if(waitingForAuthData){

              return(
                      <div>
                        <MainLayout  content={LoadingPage}/>
                      </div>
              );
      }

        if(!userId){
            FlowRouter.go("/");
        }
        return(
            <div>
              <MainLayout  content={content} Meteor={Meteor}/>
            </div>
        );

    }
}





const LoadingPage = () => (
        <div>
            <h1>LOADING PAGE</h1>
        </div>
);

export default Auth;
