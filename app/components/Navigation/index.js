/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Navigation({ topics, selectTopic }) {
  const topicNodes = topics.map(t => (
    <div
      key={t.name}
      onClick={() => selectTopic(t)}
    >
      {t.name}
    </div>
  ));
  return (
    <div className={styles.navigation}>
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
};

export default Navigation;
