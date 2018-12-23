import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
// import { connect } from 'react-redux';
// import { queryStringParse } from 'utils/helpers';
import Main from 'containers/main';
// import { store } from 'store';

const NoMatch = React.lazy(() => import('containers/pages/404'));

const checkAuth = ({ history, actions, ...rest }) => () => {
  //let { accessToken } = queryStringParse(history.location.search);
  /* const {
    auth: { accessToken: 'b;a' },
  } = store.getState(); */

  const accessToken = 'bla';
  const storeAccessToken = '';
  if (history.location.pathname === '/' && process.env.NODE_ENV === 'production' && !accessToken) {
    return <NoMatch />;
  }

  if (history.location.pathname !== '/' && !storeAccessToken) {
    return <NoMatch />;
  }

  return <Main {...rest} />;
};

const Router = ({ history, actions, ...rest }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<div> Loading...</div>}>
          <Route strict path="/" component={checkAuth({ history, actions, ...rest })} />
        </Suspense>
      </Switch>
    </ConnectedRouter>
  );
};

// const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

//export default connect(mapStateToProps)(Router);

export default Router;
