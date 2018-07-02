import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './styles';

function DeleteButton(props) {
  const { classes, deleteElement } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => deleteElement}
      >
        Primary
      </Button>
    </div>
  );
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteButton);
