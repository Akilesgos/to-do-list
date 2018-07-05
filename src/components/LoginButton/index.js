import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const LoginButton = (props) => {
  const { onLoginSubmit, classes } = props;

  return (
    <Button
      variant="contained"
      className={classes.button}
      color="primary"
      onClick={onLoginSubmit}
    >
      Login
    </Button>
  );
};

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginButton;
