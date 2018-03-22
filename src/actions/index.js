import { createAction } from 'redux-act';

export const addPost = createAction('CREATE_ANEW_POST');
export const fetchPosts = createAction('FETCH_POSTS');
export const storePosts = createAction('STORE_POSTS_IN_THE_REDUX_STORE');
 
