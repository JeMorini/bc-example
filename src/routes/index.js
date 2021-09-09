import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
