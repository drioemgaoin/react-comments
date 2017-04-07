import React from 'react';

const CommentHeader = ({author, date}) => {
  return (
      <div className="comment-header">
          <div>{author}</div>
          <div>{date}</div>
      </div>
  );
};

CommentHeader.propTypes = {
    author: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired
};

export default CommentHeader;
