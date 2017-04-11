import React from 'react';
import PropTypes from 'prop-types';

const CommentBody = ({content}) => {
  return (
      <div className="comment-body">
          <p>{content}</p>
      </div>
  );
};

CommentBody.propTypes = {
    content: PropTypes.string.isRequired
};

export default CommentBody;
