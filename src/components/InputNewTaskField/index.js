import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import AddNewTaskToListButton from '../AddNewTaskToListButton';

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
          classes={classes}
        />
      </div>
    );
  }
}

InputNewTaskField.protoType = {
  classes: PropTypes.object.isRequired,
};

export default InputNewTaskField;
