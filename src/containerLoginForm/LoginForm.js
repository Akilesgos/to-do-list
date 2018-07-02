import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import LoginButton from '../components/LoginButtons';
import styles from './styles';

class LoginForm extends Component {
  password = 'exampleAnthony';
  state = {
    name: 'Enter your name',
    access: false,
  };

  onLoginChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onLoginSubmit = (e) => {
    if (this.password == this.state.name) {
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
      return <Redirect to="/toDolist" />;
    }

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Enter Your name"
            className={classes.textField}
            value={this.state.name}
            margin="normal"
            onChange={this.onLoginChange}
          />
          <LoginButton onLoginSubmit={this.onLoginSubmit} />
          <br />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
