// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import cookie from 'js-cookie';
import Login from './login';
import Dashboard from './dashboard';

// Ensure User is Logged In
// or Redirect to /login
const authenticateUser = (state, replace) => {
  if (!cookie.get('user')) {
    replace('/login');
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/dashboard" component={Dashboard} onEnter={authenticateUser}/>
    <Redirect from="/" to="/dashboard"/>
  </Router>
), document.querySelector('.app'));
