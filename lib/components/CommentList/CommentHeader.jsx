import React from 'react';
import PropTypes from 'prop-types';

const CommentHeader = ({author, date}) => {
  return (
      <div className="comment-header">
          <div>{author}</div>
          <div>{date}</div>
      </div>
  );
};

CommentHeader.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default CommentHeader;
