/**
*
* Login
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import TextInput from '../TextInput';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: PropTypes.func.isRequired,
    cancelLogin: PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const email = this.emailField.value();

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
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <TextInput
          ref={f => { this.emailField = f; }}
          placeholder="Your email"
          className={styles.input}
          errorText={this.state.errorText}
        />

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
