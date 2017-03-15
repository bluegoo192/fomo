import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Feed from './components/Feed.jsx';
import Nearby from './components/Nearby.jsx';
import Friends from './components/Friends.jsx';

import './index.css';

import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/feed" component={Feed} />
      <Route path="/nearby" component={Nearby} />
      <Route path="/friends" component={Friends} />
      <Route path="/" component={Feed} /> 
    </Route>
  </Router>),
  document.getElementById('root')
);
