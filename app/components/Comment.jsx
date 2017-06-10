import React from 'react';
import moment from 'moment';

import CommentList from './list/CommentList';
import CommentForm from './form/CommentForm';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: this.props.comments };
  }

  onSubmit(comment) {
    const item = Object.assign({}, comment, { date: moment()})
    this.setState( { comments: this.state.comments.concat([item]) });
  }

  render() {
    return (
      <div className='comments'>
        <CommentList defaultAvatar={this.props.avatar} comments={this.state.comments} />
        <CommentForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}
