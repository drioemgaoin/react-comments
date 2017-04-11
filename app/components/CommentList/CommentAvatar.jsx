import React from 'react';
import PropTypes from 'prop-types';

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
    image: PropTypes.string.isRequired
};


export default CommentAvatar;
