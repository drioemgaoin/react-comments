import React from 'react';
import moment from 'moment';

import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';

import './comments.scss';

export default class Comments extends React.Component {
    render() {
      return (
          <div className="comments">
            <CommentAvatar />
            <CommentHeader author='Romain Diegoni' date={moment().format('DD/MM/YYYY HH:mm A')}/>
            <CommentBody />
          </div>
      );
    }
}
