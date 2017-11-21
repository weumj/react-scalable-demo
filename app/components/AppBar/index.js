/**
*
* AppBar
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import IconButton from '../IconButton';


function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login" > login </Link>);

  return (
    <div className={styles.appBar}>
      <IconButton
        iconClass={styles.icon}
        icon="bars"
        buttonClass={styles.iconButton}
        onClick={toggleDrawer}
      />
      <div
        className={styles.heading}
      >
      Coder daily
      </div>
      <div
        className={styles.linkContainer}
      >
        { loginLink }
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
