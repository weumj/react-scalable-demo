/**
*
* AppBar
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';


function AppBar({ toggleDrawer }) {
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
        <Link to="/login" > log in </Link>
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
