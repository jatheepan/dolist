import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ items }) => {
  const doneCount = items.filter(i => i.selected).length;
  const count = items.length;
  return (
    <div className="Status">{doneCount} of {count} selected</div>
  );
};

Status.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Status;
