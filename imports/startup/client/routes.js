import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from '../../ui/App';
import FormPage from '../../ui/FormPage';
import NotFoundPage from '../../ui/NotFoundPage';

function checkLoggedIn(nextState, replace) {
  const loginPathName = '/login';
  const isLoginRoute = nextState.location.pathname === loginPathName;
  if (!Meteor.loggingIn() && !Meteor.user()) {
    if (!isLoginRoute) {
      replace(loginPathName);
    }
  } else {
    if (isLoginRoute) {
      replace('/')
    }
  }
}

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/login" component={FormPage} onEnter={checkLoggedIn}/>
    <Route path="/" component={App} onEnter={checkLoggedIn}/>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

render(renderRoutes(), document.getElementById('app'));