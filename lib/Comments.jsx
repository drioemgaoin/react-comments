import React from 'react';

import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';

import './comments.scss';

export default class Comments extends React.Component {
    render() {
      return (
          <div>
            <CommentAvatar />
            <CommentHeader />
            <CommentBody />
          </div>
      );
    }
}
