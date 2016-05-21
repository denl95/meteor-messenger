import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from '../../ui/App';
import FormPage from '../../ui/FormPage';
import NotFoundPage from '../../ui/NotFoundPage';

function checkLoggedIn(nextState, replace) {
  const loginPathName = '/login';
  if (!Meteor.loggingIn() && !Meteor.user()) {
    replace(loginPathName);
  } else {
    if (nextState.location.pathname === loginPathName) {
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