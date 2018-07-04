import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ToDoList from 'containers/ToDoList';
import Authorization from 'containers/Authorization';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Authorization} />
          <Route path="/toDoList" exact component={ToDoList} />
        </div>
      </Router>
    );
  }
}

export default App;
