import { createReducer } from 'redux-act';
import _ from 'lodash';
import { storePosts } from './../actions/index';

export const PostReducer = createReducer({
  [storePosts]: (state, payload) => _.mapKeys(payload, 'id')
}, []);
  /*
  [storePosts]: (state, payload) => [
    {
      postText: payload
    },
    ...state
  ]*/
