import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    console.log('Signup - onSubmit - formProps: ', formProps);
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button> Sign up</button>
      </form>
    );
  }
}

// Compose allows us to compose multiple Higher Order components.
export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);