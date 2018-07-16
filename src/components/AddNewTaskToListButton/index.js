import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const AddNewTaskToListButton = ({ addNewItem, inputValue, button }) => (
  <Button
    className={button}
    variant="contained"
    onClick={() => addNewItem(inputValue)}
    color="primary"
  >
    Add new things
  </Button>
);

AddNewTaskToListButton.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default AddNewTaskToListButton;
