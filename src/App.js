import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ToDoList from 'containers/ToDoList';
import Authorization from 'containers/Authorization';
import MenuAppBar from 'containers/NavMenu';

class App extends Component {
  render() {
    console.info(`render(App) at${Date.now()}`);

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
                  <MenuAppBar />
                  <ToDoList />
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
