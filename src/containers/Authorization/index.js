import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import LoginButton from 'components/LoginButton';
import styles from './styles';

export const cookies = new Cookies();

class Authorization extends Component {
  PASSWORD = 'example';
  state = {
    name: '',
    access: false,
  };

  onLoginChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onLoginSubmit = (e) => {
    if (this.PASSWORD === this.state.name) {
      this.setState({
        access: !this.state.access,
      });
      cookies.set('cookieAccess', true, {
        path: '/',
        expires: new Date(Date.now() + 3600000),
      });
      alert(`Welcome ${this.state.name}`);
    } else {
      alert(`Sorry ${this.state.name} but you have entered wrong name`);
    }
  };

  isAuthorized = () => {
    const { access } = this.state;
    return access || cookies.get('cookieAccess');
  };

  render() {
    const {
      classes: { paper, containerform, textField, button },
    } = this.props;

    if (this.isAuthorized()) {
      return <Redirect to="/main" />;
    }

    return (
      <Grid container alignItems="center" direction="column">
        <Paper className={paper}>
          <form noValidate autoComplete="off" className={containerform}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <TextField
                id="name"
                label="Enter Your name"
                placeholder="Enter Your name"
                className={textField}
                value={this.state.name}
                onChange={this.onLoginChange}
              />
              <LoginButton button={button} onLoginSubmit={this.onLoginSubmit} />
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

Authorization.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Authorization);
