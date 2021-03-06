/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NavigationContainer from '../../containers/NavigationContainer';
import LinkListContainer from '../../containers/LinkListContainer';

// eslint-disable-next-line react/prefer-stateless-function
export class HomePage extends React.Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>
    );
  }
}

// HomePage.propTypes = {
//   changeRoute: React.PropTypes.func,
//   loading: React.PropTypes.bool,
//   error: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
//   repos: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.bool,
//   ]),
//   onSubmitForm: React.PropTypes.func,
//   username: React.PropTypes.string,
//   onChangeUsername: React.PropTypes.func,
// };

function mapDispatchToProps(dispatch) {
  return {
  };
}

// const mapStateToProps = createStructuredSelector({
//   repos: selectRepos(),
//   username: selectUsername(),
//   loading: selectLoading(),
//   error: selectError(),
// });

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connect(null, mapDispatchToProps)(HomePage);
