import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';
import Status from './components/Status';
import './style.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.newTaskRef = React.createRef();
    this.onSubmit = this.onSubmitHandler.bind(this);
    this.onKeyUp = this.onKeyUpHandler.bind(this);
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
    this.newTaskRef.current.value = '';
  }

  onKeyUpHandler({ key }) {
    if (key === 'Enter') this.onSubmitHandler();
  }

  onListItemClickHandler(e, { id }) {
    e.preventDefault();
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
            <input ref={this.newTaskRef} className="form-control" onKeyUp={this.onKeyUp} />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.onSubmit}>Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"><Status items={this.state.items} /></div>
        </div>
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
