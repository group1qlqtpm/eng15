import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'config/routes';
import Home from 'containers/Home/Loadable';

function App() {
  return (
    <Switch>
      <Route exact path={routes.index} component={Home} />
    </Switch>
  );
}

export default App;
