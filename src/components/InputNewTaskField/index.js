import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import AddNewTaskToListButton from '../AddNewTaskToListButton';

import styles from './styles';

class InputNewTaskField extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (event) => this.setState({ inputValue: event.target.value });

  render() {
    const { inputValue } = this.state;
    const { addNewItem, classes } = this.props;

    return (
      <div>
        <Input
          className={classes.input}
          value={inputValue}
          onChange={this.handleChange}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <AddNewTaskToListButton
          addNewItem={addNewItem}
          inputValue={inputValue}
        />
      </div>
    );
  }
}

InputNewTaskField.protoType = {
  classes: PropTypes.object.isRequired,
};
//          onChange={(e) => this.handleChange(e.target.value)}

export default withStyles(styles)(InputNewTaskField);
