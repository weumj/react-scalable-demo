/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';


import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(l => (
    <div
      key={l.id}
    >
      {l.url} - ({l.description})
    </div>
  ));

  return (
    <div className={styles.linkList}>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

export default LinkList;
