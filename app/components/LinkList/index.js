/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';

import Link from '../Link';
import styles from './styles.css';
import IconButton from '../IconButton';


function LinkList({ links, topicName, children, startAdd }) {
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
      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        onClick={() => startAdd(topicName)}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  startAdd: PropTypes.func,
  children: PropTypes.element,
  topicName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

export default LinkList;
