import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({ items, onSelectionChange }) => {
  const listItems = items.map((item) => {
    const classes = classNames('list-group-item', 'list-group-item-action', {
      active: item.selected,
    });
    let inputCheckbox = null;
    const onChange = () => {
      onSelectionChange(item, inputCheckbox.checked);
    };
    return (
      <li key={item.id} className={classes}>
        <div className="row">
          <div className="col-md-1 col-sm-1">
            <input type="checkbox" id={`d${item.id}`} onChange={onChange} ref={(input) => { inputCheckbox = input; }} />
          </div>
          <div className="col-md-11 col-sm-11">
            <label htmlFor={`d${item.id}`}>{item.label}</label>
          </div>
        </div>
      </li>
    );
  });
  return (<ul className="List list-group list-group-flush">{listItems}</ul>);
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default List;
