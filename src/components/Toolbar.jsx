import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Toolbar({ items, onDeleteClick, onCompleteClick }) {
  const hasSelection = !!(items.find(item => item.selected));
  const btnClasses = classNames('btn', 'btn-secondary', 'btn-sm');
  return (
    <div className="Toolbar">
      <div className="btn-group">
        <button
          className={btnClasses}
          onClick={onDeleteClick}
          disabled={!hasSelection}
        >Delete
        </button>
        <button
          className={btnClasses}
          onClick={onCompleteClick}
          disabled={!hasSelection}
        >Complete
        </button>
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCompleteClick: PropTypes.func.isRequired,
};
