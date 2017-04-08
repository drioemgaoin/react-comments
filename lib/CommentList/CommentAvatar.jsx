import React from 'react';

export default class CommentAvatar extends React.Component {
    render() {
      return (
          <div className='comment-avatar'>
              <img src={this.props.image}/>
          </div>
      );
    }
}
