/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen, email }) {
  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
        email={email}
      />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  email: PropTypes.string,
  isDrawerOpen: PropTypes.bool.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Navigation;
