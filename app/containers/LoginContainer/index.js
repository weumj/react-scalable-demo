/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectLoginContainer from './selectors';

import Login from '../../components/Login';

import { login, cancelLogin } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLoginContainer();


const mapActionCreatorToProps = dispatch => bindActionCreators({ login, cancelLogin }, dispatch);

export default connect(mapStateToProps, mapActionCreatorToProps)(LoginContainer);
