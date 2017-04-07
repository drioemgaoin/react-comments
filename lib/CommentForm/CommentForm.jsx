import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { createStore } from 'redux';

class CommentForm extends React.Component {
    handleSubmit(data) {
        console.log(data);
    }

    renderField(fields) {
        const { input, label, type, className, meta: { touched, error, warning } } = fields;
        return (
          <div>
            <label>{label}</label>
            <div>
              <input {...input} placeholder={label} type={type} className={className} />
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
          </div>
        );
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <form id='comment' onSubmit={handleSubmit((data) => this.handleSubmit(data))}>
                    <Field name='content'
                      component={this.renderField}
                      type='text'
                      label='Content'
                      {...this.props} />

                <div>
                  <input type='submit' value='Create' disabled={submitting} />
                </div>
            </form>
        );
    }
}

CommentForm = reduxForm({ form: 'comment', store: createStore(reduxForm) })(CommentForm);
export default CommentForm;
