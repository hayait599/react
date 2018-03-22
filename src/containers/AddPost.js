import React, { Component } from 'react';
import { addPost } from './../actions/index';

class AddPost extends Component {
  render() {
    return (
      <div className="post-form">
        <div className="group">
          <div className="title">Title</div>
          <input type="text" />
        </div>
        <div className="group">
          <div className="title">Category</div>
          <input type="text" />
        </div>
        <div className="group">
          <div className="title">Content</div>
          <input type="text" />
        </div>
        <div className="btn-group">
          <button>save</button>
          <button>cancel</button>
        </div>
      </div>
    );
  }
}
export default AddPost;
