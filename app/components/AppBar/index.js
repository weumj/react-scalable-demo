/**
*
* AppBar
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';


function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login" > login </Link>);

  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={toggleDrawer}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
        />
      </div>
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
