import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('containers/home'));
const NoMatch = React.lazy(() => import('containers/pages/404'));

const PublicRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NoMatch} />
  </Switch>
);

export default PublicRouter;
