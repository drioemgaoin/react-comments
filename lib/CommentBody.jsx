import React from 'react';

const CommentBody = ({message}) => {
  return (
      <div className="comment-body">
          <p>{message}</p>
      </div>
  );
};

CommentBody.propTypes = {
    message: React.PropTypes.string.isRequired
};

export default CommentBody;
