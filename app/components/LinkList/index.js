/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';

import Link from '../Link';
import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
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
