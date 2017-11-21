/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';

import Link from '../Link';
import styles from './styles.css';

function LinkList({ links, topicName, children }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));

  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      {children}
    </div>
  );
}

LinkList.propTypes = {
  children: PropTypes.element,
  topicName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

export default LinkList;
