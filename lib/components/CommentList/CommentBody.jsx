import React from 'react';

const CommentBody = ({content}) => {
  return (
      <div className="comment-body">
          <p>{content}</p>
      </div>
  );
};

CommentBody.propTypes = {
    content: React.PropTypes.string.isRequired
};

export default CommentBody;
