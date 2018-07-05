import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { addAction, selectionChangeAction, deleteItemsAction, completeItemsAction, resetItemsAction } from './actions';
import List from './components/List';
import Status from './components/Status';
import Toolbar from './components/Toolbar';
import './style.scss';

class AppInside extends Component {
  constructor() {
    super();
    this.newTaskRef = React.createRef();
    this.onSubmit = this.onSubmitHandler.bind(this);
    this.onKeyUp = this.onKeyUpHandler.bind(this);
    this.onSelectionChange = this.onSelectionChangeHandler.bind(this);
    this.onDeleteClick = this.onDeleteClickHandler.bind(this);
    this.onCompleteClick = this.onCompleteClickHandler.bind(this);
    this.onResetClick = this.onResetClickHandler.bind(this);
  }
  onSubmitHandler() {
    const item = this.newTaskRef.current.value.trim();
    if (item) {
      this.props.onSubmit(item);
      this.newTaskRef.current.value = '';
    }
  }
  onKeyUpHandler({ key }) {
    if (key === 'Enter') this.onSubmitHandler();
  }
  onSelectionChangeHandler(selectedItems) {
    this.props.onSelectionChange(selectedItems);
  }
  onDeleteClickHandler() {
    this.props.onDeleteItems();
  }
  onCompleteClickHandler() {
    this.props.onCompleteItems();
  }
  onResetClickHandler() {
    this.props.onResetItems();
  }
  render() {
    const { items } = this.props;
    return (
      <main className="container">
        <h1>DoList</h1>
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
            <Toolbar
              items={items}
              onDeleteClick={this.onDeleteClick}
              onCompleteClick={this.onCompleteClick}
              onResetClick={this.onResetClick}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"><Status items={items} /></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <List items={items} onSelectionChange={this.onSelectionChange} />
          </div>
        </div>
      </main>
    );
  }
}

AppInside.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
  onCompleteItems: PropTypes.func.isRequired,
  onResetItems: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: value => dispatch(addAction(value)),
    onSelectionChange: changedItems => dispatch(selectionChangeAction(changedItems)),
    onDeleteItems: () => dispatch(deleteItemsAction),
    onCompleteItems: () => dispatch(completeItemsAction),
    onResetItems: () => dispatch(resetItemsAction),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppInside);

export default App;
