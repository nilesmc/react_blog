import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import NewLayout from './components/NewLayout';
import App from './App.js';
import Login from './components/Login';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={NewLayout} >
      <IndexRoute component={App}/>
      <Route path="login" component={Login} />
      <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;