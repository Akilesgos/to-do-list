import React, { Component } from 'react';
import update from 'react-addons-update'; // ES6
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { cookies } from '../Authorization';
import InputNewTaskField from 'components/InputNewTaskField';
import TaskOfTheList from 'components/TaskOfTheList';
import DeleteTasksFromListButton from 'components/DeleteTasksFromListButton';
import LogoutButton from 'components/LogoutButton';

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
    const {
      classes: { paper, input, button },
    } = this.props;

    if (!cookies.get('cookieAccess')) {
      return <Redirect to="/" />;
    }

    return (
      <Grid container justify="center" alignItems="center" direction="column">
        <Paper className={paper}>
          <InputNewTaskField
            addNewItem={this.addNewItem}
            input={input}
            button={button}
          />
          <TaskOfTheList
            items={this.state.listItems}
            addNewStatus={this.addNewStatus}
          />
          <LogoutButton button={button} cookies={cookies} />
          {/* неявные приобразования */}
          {this.anyChecked() && (
            <DeleteTasksFromListButton
              handleDeleteClick={this.handleDeleteClick}
              button={button}
            />
          )}
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(TodoList);
