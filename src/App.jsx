import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';
import Status from './components/Status';
import Toolbar from './components/Toolbar';
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
    this.onSelectionChange = this.onSelectionChangeHandler.bind(this);
    this.onDeleteClick = this.onDeleteClickHandler.bind(this);
    this.onEditClick = this.onEditClickHandler.bind(this);
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

  onSelectionChangeHandler({ id }, checked) {
    const item = this.state.items.find(i => i.id === id);
    item.selected = checked;
    this.setState({
      items: this.state.items,
    });
  }

  onDeleteClickHandler() {
    const { items } = this.state;
    const unSelectedItems = items.filter(i => !i.selected);
    // console.log(unSelectedItems);
    this.setState({
      items: unSelectedItems,
    });
  }

  onEditClickHandler() {
    console.log(this, 'edit');
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-9 col-sm-9">
            <input ref={this.newTaskRef} className="form-control" onKeyUp={this.onKeyUp} />
          </div>
          <div className="col-md-3 col-sm-3">
            <button className="btn btn-primary" onClick={this.onSubmit}>Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Toolbar onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"><Status items={this.state.items} /></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <List items={this.state.items} onSelectionChange={this.onSelectionChange} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
