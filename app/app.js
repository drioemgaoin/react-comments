import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import {CommentList, CommentForm, commentsReducer} from './index';

var props = { comments: [
    { id: 1, author: 'Romain Diegoni', date: '07/04/2017 14:39 PM', content: 'My first comment', avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12274397_10153300194303182_4698046983774435570_n.jpg?oh=726bc8cb8f6ac28c1858d55baef4e0ac&oe=595D3017' },
    { id: 2, author: 'Jerome Saint-Pierre', date: '07/04/2017 15:39 PM', content: 'Me too!!' }
  ]
};

const reducer = combineReducers({
  comments: commentsReducer
});

const store = createStore(reducer, props);

ReactDOM.render(
  <Provider store={store}>
  <div>
    <CommentList defaultAvatar='default-avatar.png' />
    <CommentForm />
  </div>
  </Provider>,
document.getElementById('main'));
