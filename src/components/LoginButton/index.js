import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const LoginButton = (props) => {
  const { onLoginSubmit, button } = props;

  return (
    <Button
      variant="contained"
      className={button}
      color="primary"
      onClick={onLoginSubmit}
    >
      Login
    </Button>
  );
};

LoginButton.propTypes = {
  button: PropTypes.string.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginButton;
