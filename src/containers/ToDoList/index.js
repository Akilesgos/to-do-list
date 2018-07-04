import React, { Component } from 'react';
import update from 'react-addons-update'; // ES6

import { withStyles } from '@material-ui/core/styles';

import InputNewTaskField from 'components/InputNewTaskField';
import TaskOfTheList from 'components/TaskOfTheList';
import DeleteTasksFromListButton from 'components/DeleteTasksFromListButton';
import styles from './styles';

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
      <div className={this.props.classes.root}>
        <InputNewTaskField addNewItem={this.addNewItem} />
        <TaskOfTheList
          items={this.state.listItems}
          addNewStatus={this.addNewStatus}
        />
        {/* неявные приобразования */}
        {this.anyChecked() && (
          <DeleteTasksFromListButton
            handleDeleteClick={this.handleDeleteClick}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(TodoList);
