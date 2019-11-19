import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'config/routes';
import Home from 'containers/Home/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle, { BackGround } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BackGround />

      <Header />
      <Switch>
        <Route exact path={routes.index} component={Home} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
