import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../actions/index';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.data, (post, key) => {
      return (
        <div className="card" key={key} >
          <div className="card-content">
            <div className="card-body">
              {post.title}
           </div>
            <div className="card-body">
            {post.categories}
           </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/post/new">
            <button className="add-post-btn" >add post</button>
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.posts
  };
};
export default connect(mapStateToProps, { fetchPosts })(HomePage);
