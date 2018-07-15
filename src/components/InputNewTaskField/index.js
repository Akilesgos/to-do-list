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
    const { addNewItem, input, button } = this.props;

    return (
      <div>
        <Input
          className={input}
          value={inputValue}
          onChange={this.handleChange}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <AddNewTaskToListButton
          addNewItem={addNewItem}
          inputValue={inputValue}
          button={button}
        />
      </div>
    );
  }
}

InputNewTaskField.protoType = {
  classes: PropTypes.object.isRequired,
};

export default InputNewTaskField;
