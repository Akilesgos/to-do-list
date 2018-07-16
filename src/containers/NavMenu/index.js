import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ToDoList from 'containers/ToDoList';
import styles from './styles';

class NavMenu extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log('value', value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab
                value={0}
                label="toDoList"
                component={Link}
                to="/main/toDoList"
              />
              <Tab value={1} label="Map" component={Link} to="/main/map" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/main/toDoList" exact component={ToDoList} />
          <Route path="/main/map" exact render={() => <p>sadasd</p>} />
        </Switch>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);
