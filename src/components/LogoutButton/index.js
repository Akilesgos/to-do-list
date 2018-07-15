import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const LogoutButton = (props) => {
  const { button, cookies } = props;

  const onLogout = (e) => {
    cookies.remove('cookieAccess', { path: '/' });
  };

  return (
    <Button
      variant="contained"
      className={button}
      color="primary"
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};

LogoutButton.propTypes = {
  cookies: PropTypes.object.isRequired,
};

export default LogoutButton;
