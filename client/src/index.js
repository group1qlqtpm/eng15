import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'antd/dist/antd.css';

import history from 'utils/history';
import App from 'containers/app';

import storeBuilder from 'my-redux/storeBuilder';

const logger = createLogger({
  timestamp: false,
  logErrors: false,
  collapsed: (getState, action, logEntry) => logEntry,
});

const store = createStore(
  storeBuilder(history),
  compose(applyMiddleware(routerMiddleware(history), thunk, logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
