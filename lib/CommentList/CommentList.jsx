import React from 'react';

import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';

import './comment-list.scss';

const CommentList = ({comments, defaultAvatar}) => {
  return (
      <div className="comment-list">
          {
              comments.map((comment) => {
                  return (<div key={comment.id} className="comment">
                    <CommentAvatar image={comment.avatar ? comment.avatar : defaultAvatar}/>
                    <CommentHeader author={comment.author} date={comment.date} />
                    <CommentBody content={comment.content} />
                  </div>);
              })
          }
      </div>
  );
};

CommentList.defaultProps = {
    comments: []
};

CommentList.propTypes = {
    comments: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            date: React.PropTypes.string.isRequired,
            content: React.PropTypes.string.isRequired
        })
    )
};

export default CommentList;
