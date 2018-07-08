import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ToDoList from 'containers/ToDoList';
import Authorization from 'containers/Authorization';
import ButtonAppBar from 'containers/NavMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Authorization} />
          <Route
            path="/toDoList"
            exact
            render={() => {
              return (
                <div>
                  <ButtonAppBar />
                  <ToDoList />;
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
