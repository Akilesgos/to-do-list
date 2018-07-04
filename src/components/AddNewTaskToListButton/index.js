import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './styles';

const AddNewTaskToListButton = (props) => {
  const { addNewItem, inputValue, classes } = props;

  return (
    <Button
      className={classes.button}
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

export default withStyles(styles)(AddNewTaskToListButton);
