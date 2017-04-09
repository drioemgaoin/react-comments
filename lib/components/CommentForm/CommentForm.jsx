import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

import { addComment } from '../../actions/comment';

import './comment-form.scss';

class CommentForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {}
    }

    handleInputChange(event) {

      let state = this.state
      state[event.target.name] = event.target.value

      this.setState(state);
    }

    handleSubmit(event) {
      event.preventDefault();

      const { dispatch } = this.props;
      dispatch(addComment(this.state.content, this.state.avatar, moment().format('DD/MM/YYYY HH:mm A')));

      this.setState({ content: '' });
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
          <form className='comment-form' method="post" onSubmit={(e) => this.handleSubmit(e)}>
            <div className='form-inline'>
              <label>Content</label>
              <textarea id="content"
                className='form-control'
                name="content"
                type="text"
                value={this.state.content}
                onChange={(e) => this.handleInputChange(e)}></textarea>
            </div>

            <input className='btn btn-primary' type="submit" value="Create" />
          </form>
        );
    }
}

export default connect()(CommentForm);
