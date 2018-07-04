import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const AddNewTaskToListButton = (props) => {
  const { addNewItem, inputValue } = props;
  console.log('inputValue', inputValue);
  console.log('addNewItem', addNewItem);

  return (
    <Button
      variant="contained"
      onClick={() => addNewItem(inputValue)}
      color="primary"
    >
      Add new things
    </Button>
  );
};

AddNewTaskToListButton.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default AddNewTaskToListButton;
