import React from 'react';
import moment from 'moment';

import './comment-form.scss';

export default class CommentForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = { comment: {} }
    }

    handleInputChange(event) {

      let state = this.state.comment
      state[event.target.name] = event.target.value
      state.date = moment();

      this.setState({ comment: state });
    }

    handleSubmit(event) {
      event.preventDefault();

      console.log(this.state);
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
                onChange={(e) => this.handleInputChange(e)}></textarea>
            </div>

            <input className='btn btn-primary' type="submit" value="Create" />
          </form>
        );
    }
}
