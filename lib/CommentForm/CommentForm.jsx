import React from 'react';
import { reduxForm, reducer } from 'redux-form';
import { createStore } from 'redux';

class CommentForm extends React.Component {
    handleSubmit(data) {
        console.log(data);
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <form id='comment-form' onSubmit={handleSubmit((data) => this.handleSubmit(data))}>
                { this.props.body }
                <div>
                  <input type='submit' value='Create' disabled={submitting} />
                </div>
            </form>
        );
    }
}

CommentForm = reduxForm({ form: 'comment-form', store: createStore(reducer) })(CommentForm);
export default CommentForm;
