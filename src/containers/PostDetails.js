import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addPost } from './../actions/index';

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ''
    };
  }
  renderPost() {
    return (
      <div className="postContetn">
        <div className="postHeader">
          <a>Back to posts</a>
          <button>Delete Post</button> 
        </div>
        <div className="postBody">
          post body 
        </div>
        <div className="postBody">
          post body 
        </div>
        <div className="postBody">
          post body 
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    );
  }
}
export default connect(null)(PostDetails);
