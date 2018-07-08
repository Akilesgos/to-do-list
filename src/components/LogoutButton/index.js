import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const LogoutButton = withRouter((props) => {
  const { button, cookies, history } = props;

  const onLogout = (e) => {
    cookies.remove('cookieAccess', { path: '/' });
    history.push('/');
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
});

LogoutButton.propTypes = {
  cookies: PropTypes.object.isRequired,
};

export default LogoutButton;
