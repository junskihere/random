import React from 'react';

class AddPost extends React.Component{

  render() {
    const error= this.props;
    return (
      <div>
        <div className="row">
          <div className="card-panel  blue-grey lighten-5 valign center"><h4>Add new post</h4></div>
        </div>

        <div className="row">
          <form clclassNameass="col s12" onSubmit={this.craetepost.bind(this)}>
            <div className="row">
              <div className="input-field col s6" >
                <input ref="title" id="input_text" type="text" length="10" className={error.title ? "invalid": ""}  onClick={this.resetError.bind(this)}/>
                <label for="input_text">Title</label>
                  {error.title ?  <span className="errorSpan" style={{color:"red"}}>{error.title}</span>: null}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea ref="body" id="textarea1" className="materialize-textarea" length="120" onClick={this.resetError.bind(this)}></textarea>
                <label for="textarea1">Body</label>
                  {error.body ?  <span className="errorSpan" style={{color:"red"}}>{error.body}</span>: null}
              </div>
            </div>
            <button type="submit" className="waves-effect waves-light btn">submit</button>
          </form>
        </div>
      </div>
    );
  }

  craetepost(event){
    if(event && event.preventDefault){
      event.preventDefault();
    }

    const {create} = this.props;

    const {title,body} = this.refs;
    const data = {
      title : title.value,
      body : body.value,
    };

    create(data);
  }

  resetError(event){
    if(event && event.preventDefault){
      event.preventDefault();
    }
    const {clearErrors} = this.props;
    clearErrors();
  }

}

export default AddPost;
