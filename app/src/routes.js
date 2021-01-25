import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import UserCrud from './components/UserCrud';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={UserCrud} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
