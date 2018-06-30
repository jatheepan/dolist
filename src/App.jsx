import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import Routes from './Routes';

const List = ({ items = [], itemClick }) => {
  const listItems = items.map((item) => {
    const onItemClick = e => itemClick(e, item);
    return (<li key={item.id} onClick={onItemClick}>{item.label}</li>);
  });
  return (<ul>{listItems}</ul>);
};

List.propTypes = {
  items: PropTypes.array,
  itemClick: PropTypes.func.isRequired
};

let items = [{
  id: 1,
  label: 'First Item'
}, {
  id: 2,
  label: 'Second Item'
}];

const onListItemClick = ( e, item ) => {
  console.log( item );
};

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div className="row">
        <div className="col-md-3">
          <input ref="newTask" className="form-control" />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
      <List items={items} itemClick={onListItemClick} />
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
