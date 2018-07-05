import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({ item, onSelectionChange }) => {
  const classes = classNames('list-group-item', 'list-group-item-action', {
    active: item.selected,
    completed: item.done,
  });
  let inputCheckbox = null;
  const onChange = () => {
    onSelectionChange(item, inputCheckbox.checked);
  };
  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <li className={classes}>
      <input type="checkbox" id={`d${item.id}`} onChange={onChange} ref={(input) => { inputCheckbox = input; }} />
      <label htmlFor={`d${item.id}`}>{item.label}</label>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

const List = ({ items, onSelectionChange }) => {
  const listItems = items.map(item => (
    <Item key={item.id} item={item} onSelectionChange={onSelectionChange} />
  ));
  return (
    <div className="List">
      <ul className="list-group list-group-flush">{listItems}</ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default List;
