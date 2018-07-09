import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
    padding: -12,
    margin: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    color: 'white',
    height: 50,
    width: 50,
    maxWidth: 100,
    padding: -22,
    margin: 0,
  },
};

class MenuAppBar extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar />
        </AppBar>

        <AppBar position="static">
          <Toolbar>
            <Button
              className={classes.menuButton}
              onClick={this.handleChange}
              label="Recents"
              value="recents"
            >
              sadas
            </Button>
            <Button href="/" className={classes.button}>
              Link
            </Button>
            <Button className={classes.menuButton}>sadas</Button>
            <div />
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
