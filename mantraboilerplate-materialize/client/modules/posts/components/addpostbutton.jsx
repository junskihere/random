import React from 'react';

class AddPostButton extends React.Component{
    componentDidMount(){
        $('.fixed-action-btn').openFAB();
    }
    render() {
      return (
          <div className="fixed-action-btn  " style={{bottom:'45px', right:'24px'}}>
            <a className="btn-floating btn-large red blue darken-3" href="/addpost">
                <i className="large material-icons">mode_edit</i>
            </a>
         </div>
      );
    }
}

export default AddPostButton ;
