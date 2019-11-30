import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from 'config/routes';
import Home from 'containers/Home/Loadable';
import Login from 'containers/Login/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle, { BackGround } from './GlobalStyle';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("userLogin") != undefined
      ? <Component {...props} />
      : <Redirect to={{
          pathname: routes.login,
          state: { from: props.location }
        }} />
  )} />
)

function App() {
  return (
    <>
      <GlobalStyle />
      <BackGround />

      <Header />
      <Switch>
        <PrivateRoute exact path={routes.index} component={Home} />
        <Route exact path={routes.login} component={Login} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
