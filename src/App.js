import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import TodoList from './containers/TodoList';
import LoginForm from './containerLoginForm/LoginForm';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Route path="/" exact component={LoginForm} />
          <Route path="/toDolist" exact component={TodoList} />
        </div>
      </Router>
    );
  }
}

export default App;
