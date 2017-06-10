import React from 'react';
import Stars from '../Stars/Stars';

import './comment-list.scss';

export default class CommentList extends React.Component {
  static defaultProps = {
    comments: [],
    defaultAvatar: 'default-avatar.png',
    dateFormat: 'DD/MM/YYYY HH:mm A'
  };

  renderAvatar(comment) {
    const url = comment.avatar ? comment.avatar : this.props.defaultAvatar;
    return (
      <div className='comment__avatar'>
          <img src={url}/>
      </div>
    );
  }

  renderHeader(comment) {
    const author = comment.author ? comment.author : 'Anonymous';
    return this.props.children ? (
          <div className='comment__header'>
            {this.props.children}
          </div>
        ) : (
          <div className='comment__header'>
            <div className='comment__header__author'>{author}</div>
            <div className='comment__header__date'>{comment.date.format(this.props.dateFormat)}</div>
          </div>
        );
  }

  renderBody(comment) {
    return (
      <div className='comment__body'>
          <p>{comment.content}</p>
      </div>
    );
  }

  render() {
    return (
        <div className='comment-list'>
            {
                this.props.comments &&
                this.props.comments.map((comment, index) => {
                    return (
                      <div key={index} className='comment'>
                        {this.renderAvatar(comment)}
                        {this.renderHeader(comment)}
                        {this.renderBody(comment)}
                      </div>
                    );
                })
            }
        </div>
    );
  }
}