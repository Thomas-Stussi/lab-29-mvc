import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ histories }) => {
  const historyElements = histories.map(history => (
    <li key={`${history.method}+${history.url}`}>
      <HistoryItem method={history.method} url={history.method} />
    </li>
  ));
  
  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
