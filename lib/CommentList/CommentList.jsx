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
    comments: [
        { id: 1, author: 'Romain Diegoni', date: '07/04/2017 14:39 PM', content: 'My first comment'},
        { id: 2, author: 'Jerome Saint-Pierre', date: '07/04/2017 15:39 PM', content: 'Me too!!'}
    ]
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
