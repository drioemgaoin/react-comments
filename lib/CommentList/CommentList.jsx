import React from 'react';

import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';

import '../comments.scss';

const CommentList = ({comments}) => {
  return (
      <div className="comments">
          {
              comments.map((comment) => {
                  return (<div key={comment.id} className="comment">
                    <CommentAvatar />
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
