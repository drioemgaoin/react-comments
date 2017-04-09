import React from 'react';
import { connect } from 'react-redux'

import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';

import './comment-list.scss';

let mapStateToProps = (state) => {
  return state;
}

class CommentList extends React.Component {
  static propTypes = {
    comments: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            author: React.PropTypes.string,
            date: React.PropTypes.string.isRequired,
            content: React.PropTypes.string.isRequired,
            avatar: React.PropTypes.string,
        })
    )
  };

  render() {
    return (
        <div className="comment-list">
            {
                this.props.comments.map((comment,index) => {
                    return (<div key={index} className="comment">
                      <CommentAvatar image={comment.avatar ? comment.avatar : this.props.defaultAvatar }/>
                      <CommentHeader author={comment.author ? comment.author : 'Anonymous' } date={comment.date} />
                      <CommentBody content={comment.content} />
                    </div>);
                })
            }
        </div>
    );
  }
}

export default connect(mapStateToProps, null)(CommentList);
