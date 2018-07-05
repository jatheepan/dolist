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
      <input
        type="checkbox"
        id={`d${item.id}`}
        onChange={onChange}
        checked={item.selected}
        ref={(input) => { inputCheckbox = input; }}
      />
      <label htmlFor={`d${item.id}`}>{item.label}</label>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

const List = ({ items, onSelectionChange }) => {
  let selectAllCheckbox = null;
  const listItems = items.map((item) => {
    const onChange = (_item, _checked) => {
      selectAllCheckbox.checked = false;
      onSelectionChange([{
        id: _item.id,
        checked: _checked,
      }]);
    };
    return (<Item key={item.id} item={item} onSelectionChange={onChange} />);
  });
  const onSelectAllChange = () => {
    onSelectionChange(items.map(item => ({
      id: item.id,
      checked: selectAllCheckbox.checked,
    })));
  };
  return (
    <div className="List">
      <input type="checkbox" id="selectAll" ref={(input) => { selectAllCheckbox = input; }} onChange={onSelectAllChange} />
      <label htmlFor="selectAll">Select all</label>
      <ul className="list-group list-group-flush">{listItems}</ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default List;
