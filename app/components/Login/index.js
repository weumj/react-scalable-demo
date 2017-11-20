/**
*
* Login
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import classNames from 'classnames';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: PropTypes.func.isRequired,
    cancelLogin: PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const email = this.emailField.value;

    if (!validator.validate(email)) {
      this.setState(() => ({
        errorText: 'Please provide a valid email',
      }));
    } else {
      this.setState(() => ({
        errorText: null,
      }));

      this.props.login(email);
    }
  };

  render() {
    const fieldError = !this.state.errorText ? null :
      (<div
        className={styles.errorMessage}
      >
        {this.state.errorText}
      </div>);

    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          placeholder="Your email"
          ref={f => { this.emailField = f; }}
          type="text"
        />

        {fieldError}

        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
