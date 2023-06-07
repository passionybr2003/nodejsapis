import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './asyncLoad';
import ManagePayment from '../ManagePayment/ManagePayment';

const routes = (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/managepayment" component={ManagePayment} />
  </Switch>
);

export default routes;
