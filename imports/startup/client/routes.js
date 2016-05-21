import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from '../../ui/App';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

render(renderRoutes(), document.getElementById('app'));