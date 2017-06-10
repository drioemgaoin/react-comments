import React from 'react';
import moment from 'moment';

import './comment-form.scss';

export default class CommentForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    handleInputChange(event) {

      let state = this.state
      state[event.target.name] = event.target.value

      this.setState(state);
    }

    handleSubmit(event) {
      event.preventDefault();

      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);

        this.setState({});
      }
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

            {this.props.children}

            <input className='btn btn-primary' type="submit" value="Create" />
          </form>
        );
    }
}
