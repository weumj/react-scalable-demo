/*
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectLinkFormContainer from './selectors';
import { addLink, addLinkCancel } from './actions';

import LinkForm from '../../components/LinkForm';

export class LinkFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LinkForm {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkFormContainer();

const mapActionCreatorToProps = dispatch => bindActionCreators({ addLink, addLinkCancel }, dispatch);

export default connect(mapStateToProps, mapActionCreatorToProps)(LinkFormContainer);
