import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.js';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Contact from './components/Contact';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;