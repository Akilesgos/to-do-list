import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import styles from './styles';

class InputNewThings extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (value) => this.setState({ inputValue: value });

  render() {
    const { inputValue } = this.state;
    const { addNewItem } = this.props; //диструктизация

    return (
      <div>
        <Input
          value={inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Button
          variant="contained"
          onClick={() => addNewItem(inputValue)}
          color="primary"
        >
          Add new things
        </Button>
      </div>
    );
  }
}

InputNewThings.protoType = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputNewThings);
