import React, { Component } from 'react';
import update from 'react-addons-update'; // ES6

import { Button } from '@material-ui/core';

import ImportNewThings from '../components/ImportNewThings';
import ItemsList from '../components/ItemsList';

import '../App.css';

class TodoList extends Component {
  DEFAUL_STATE = {
    listItems: [],
  };
  state = this.DEFAUL_STATE;

  addNewItem = (item) => {
    if (this.anyItemsWithText(item)) {
      alert('You already added this item!');
      return;
    }

    this.setState({
      listItems: [...this.state.listItems, { text: item, checked: false }],
    });
  };

  anyItemsWithText = (text) => {
    return (
      text.length === 0 ||
      (this.state.listItems.length > 0 &&
        this.state.listItems.filter((item) => item.text === text).length > 0)
    );
  };

  handleDeleteClick = () => {
    const newItems = this.state.listItems.filter(({ checked }) => !checked);

    this.setState({ listItems: newItems });
  };

  addNewStatus = (itemIndex) => {
    this.setState({
      listItems: update(this.state.listItems, {
        [itemIndex]: {
          checked: { $set: !this.state.listItems[itemIndex].checked },
        },
      }),
    });
  };

  anyChecked = () => {
    return this.state.listItems.filter(({ checked }) => checked).length > 0;
  };

  render() {
    return (
      <div>
        <ImportNewThings addNewItem={this.addNewItem} />
        <ItemsList
          items={this.state.listItems}
          addNewStatus={this.addNewStatus}
        />
        {/* неявные приобразования */}
        {this.anyChecked() && (
          <Button
            onClick={this.handleDeleteClick}
            variant="contained"
            color="primary"
          >
            Remove things
          </Button>
        )}
        <br />
        <hr />
      </div>
    );
  }
}

export default TodoList;
