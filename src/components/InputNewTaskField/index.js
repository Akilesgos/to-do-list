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

  handleChange = (value) => this.setState({ inputValue: value });

  render() {
    const { inputValue } = this.state;
    const { addNewItem } = this.props;

    return (
      <div>
        <Input
          value={inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
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

export default withStyles(styles)(InputNewTaskField);
