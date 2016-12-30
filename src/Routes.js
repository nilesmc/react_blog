import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './App.js';
import NewLayout from './components/NewLayout';

import NotFound from './components/NotFound';
import Login from './components/Login';
import Contact from './components/Contact';

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={NewLayout} >
      <IndexRoute component={App}/>
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;