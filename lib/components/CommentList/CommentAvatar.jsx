import React from 'react';

class CommentAvatar extends React.Component {
    render() {
      return (
          <div className='comment-avatar'>
              <img src={this.props.image}/>
          </div>
      );
    }
}

CommentAvatar.propTypes = {
    image: React.PropTypes.string.isRequired
};


export default CommentAvatar;
