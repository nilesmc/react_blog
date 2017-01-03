import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './App.js'
import BlogLayout from "./components/BlogLayout";
import Login from './components/Login';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={App} >
      <IndexRoute component={BlogLayout} />
      <Route path="login" component={Login} />
      <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;