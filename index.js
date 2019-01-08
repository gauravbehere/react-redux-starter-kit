import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app.js';
import { Provider } from 'react-redux'
import { combineReducers ,createStore } from 'redux'

import PostsReducer from './src/Reducers/postsReducer';
import CommentsReducer from './src/Reducers/commentsReducer';

/**
 * Combine reducers before creating a store so that we have substores needed for 
 * different components can be created.
 */
const allReducers = combineReducers({
    posts: PostsReducer,
    comments: CommentsReducer
});

let store = createStore(allReducers);

/**
 * Observe that our sub stores are present in the initial state
 */
console.log(store.getState());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app-root'));