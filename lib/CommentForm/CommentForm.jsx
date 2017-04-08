import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = { comment: {} }
    }

    handleInputChange(event) {

      let state = this.state.comment
      state[event.target.name] = event.target.value

      this.setState({ comment: state });
    }

    handleSubmit(event) {
      event.preventDefault();

      console.log(this.state);
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
          <form method="post" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label>Content</label>
              <textarea id="content"
                name="content"
                type="text"
                onChange={(e) => this.handleInputChange(e)}></textarea>
            </div>

            <input type="submit" value="Create" />
          </form>
        );
    }
}
