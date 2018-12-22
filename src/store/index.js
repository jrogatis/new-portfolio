import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { reducers } from 'modules';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const createRootReducer = (state, action) => {
  return combineReducers({
    ...reducers,
    router: connectRouter(history),
  })(state, action);
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.REACT_APP_NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
          options: {
            undefined: true,
            function: fn => fn.toString(),
          },
        },
      })
    : compose;

const middlewares = [routeMiddleware];
if ((module.hot && process.env.NODE_ENV !== 'production') || process.env.CI === true) {
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}

const store = createStore(createRootReducer, composeEnhancers(applyMiddleware(...middlewares)));

if (module.hot && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  module.hot.accept('../modules', () => store.replaceReducer(reducers));
}

export { store, history };
