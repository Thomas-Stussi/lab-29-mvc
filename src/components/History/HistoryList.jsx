/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ histories }) => {
  const historyElements = histories.map(history => (
    <li key={`${history.method}+${history.url}`}>
      <HistoryItem method={history.method} url={history.url} body={history.body} />
    </li>
  ));

  return (
    <ul className={styles.HistoryList}>
      <li>Request History</li>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    body: PropTypes.string,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
