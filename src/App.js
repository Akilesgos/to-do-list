import React from 'react';
import { Route } from 'react-router-dom';

import Authorization from 'containers/Authorization';
import NavMenu from 'containers/NavMenu';

const App = () => (
  <div>
    <Route path="/" exact component={Authorization} />
    <Route path="/main" component={NavMenu} />
  </div>
);

export default App;
