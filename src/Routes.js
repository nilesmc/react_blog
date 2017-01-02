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
      <IndexRoute component={BlogLayout} key='1'/>
      <Route path="login" component={Login} key='2' />
      <Route path="contact" component={Contact} key='3' />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;