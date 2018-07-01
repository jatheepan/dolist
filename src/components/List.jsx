import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({ items, itemClick }) => {
  const listItems = items.map((item) => {
    const onItemClick = e => itemClick(e, item);
    const classes = classNames('list-group-item', 'list-group-item-action', {
      active: item.selected,
    });
    return (<button key={item.id} onClick={onItemClick} className={classes}>{item.label}</button>);
  });
  return (<div className="list-group list-group-flush">{listItems}</div>);
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemClick: PropTypes.func.isRequired,
};

export default List;
