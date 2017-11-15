/*
 *
 * LinkListContainer
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';

import { requestLinks } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    topicName: PropTypes.string.isRequired,
    requestLinks: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLinks(newProps.routeTopicName);
    }
  }

  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

const mapActionCreatorToProps = dispatch => bindActionCreators({ requestLinks }, dispatch);

export default connect(mapStateToProps, mapActionCreatorToProps)(LinkListContainer);
