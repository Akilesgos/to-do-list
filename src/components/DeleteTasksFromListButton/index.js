import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const DeleteTasksFromListButton = (props) => {
  const { handleDeleteClick, classes } = props;

  return (
    <Button
      className={classes.button}
      onClick={handleDeleteClick}
      variant="contained"
      color="primary"
    >
      Remove things
    </Button>
  );
};

DeleteTasksFromListButton.propTypes = {
  handleDeleteClick: PropTypes.func.isRequired,
};

export default DeleteTasksFromListButton;
