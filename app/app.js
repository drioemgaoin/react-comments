import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.css';

import Comment from './components/Comment';

const comments = [
  { id: 1, author: 'Romain Diegoni', date: moment('2017-04-07 14:39'), content: 'My first comment\r\nYes it is', avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12274397_10153300194303182_4698046983774435570_n.jpg?oh=726bc8cb8f6ac28c1858d55baef4e0ac&oe=595D3017' },
  { id: 2, author: 'Jerome Saint-Pierre', date: moment('2017-04-07 15:39'), content: 'Me too!!' }
];

ReactDOM.render(
    <Comment comments={comments} displayForm={true} />,
document.getElementById('main'));
