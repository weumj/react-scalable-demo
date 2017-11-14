/*
 *
 * NavigationContainer
 *
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectNavigationContainer from './selectors';
import { requestTopics } from './actions';

import Navigation from '../../components/Navigation';

export class NavigationContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <div>
        <Navigation {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

const mapActionCreatorToProps = dispatch => bindActionCreators({ requestTopics }, dispatch);

export default connect(mapStateToProps, mapActionCreatorToProps)(NavigationContainer);
