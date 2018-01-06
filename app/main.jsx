'use strict'
import React from 'react'
import {BrowserRouter as Router, Route, IndexRedirect, Switch} from 'react-router-dom';
import {render} from 'react-dom'
import Test from './components/Test';
import Lobby from './components/Lobby';

render(
  <Router>
    <Switch>
      <Route path="/" component={Lobby} />
    </Switch>
  </Router>,
  document.getElementById('main')
)
