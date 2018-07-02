import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';

function LoginButton(props) {
  const { classes, onLoginSubmit } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onLoginSubmit}
    >
      Login
    </Button>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
