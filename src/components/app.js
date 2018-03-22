import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, PostDetails, AddPost } from './../containers/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Switch>
            <Route path="/post/details/" component={PostDetails} />
            <Route path="/post/new/" component={AddPost} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
