import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    console.log('Signin - onSubmit - formProps: ', formProps);
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
    
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
        <div>
          {this.props.errorMessage}
        </div>
        <button> Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return  { errorMessage: state.auth.errorMessage };
}

// Compose allows us to compose multiple Higher Order components.
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signin' })
)(Signin);