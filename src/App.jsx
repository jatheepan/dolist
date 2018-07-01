import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.newTaskRef = React.createRef();
    this.onSubmit = this.onSubmitHandler.bind(this);
    this.onListItemClick = this.onListItemClickHandler.bind(this);
  }

  onSubmitHandler() {
    const { items } = this.state;
    const item = this.newTaskRef.current.value.trim();
    if (item) {
      items.push({
        label: item,
        done: false,
        selected: false,
        id: Date.now(),
      });
    }
    this.setState({ items });
  }

  onListItemClickHandler(e, { id }) {
    const item = this.state.items.find(i => i.id === id);
    item.selected = !item.selected;
    this.setState({
      items: this.state.items,
    });
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-9">
            <input ref={this.newTaskRef} className="form-control" />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.onSubmit}>Add</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <List items={this.state.items} itemClick={this.onListItemClick} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
