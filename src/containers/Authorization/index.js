import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import LoginButton from 'components/LoginButton';
import styles from './styles';

class Authorization extends Component {
  password = 'example';
  state = {
    name: 'Enter your name',
    access: false,
  };

  onLoginChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onLoginSubmit = (e) => {
    if (this.password === this.state.name) {
      this.setState({
        access: !this.state.access,
      });
      alert(`Welcome ${this.state.name}`);
    } else {
      alert(`Sorry ${this.state.name} but you have entered wrong name`);
    }
  };

  render() {
    const { classes } = this.props;

    if (this.state.access) {
      return <Redirect to="/toDoList" />;
    }

    return (
      <Grid container alignItems={'center'} direction={'column'}>
        <Paper className={classes.paper}>
          <form noValidate autoComplete="off" className={classes.containerform}>
            <Grid
              container
              justify={'center'}
              alignItems={'center'}
              direction={'column'}
            >
              <TextField
                id="name"
                label="Enter Your name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
                onChange={this.onLoginChange}
              />
              <LoginButton
                classes={classes}
                onLoginSubmit={this.onLoginSubmit}
              />
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
