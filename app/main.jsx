'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, Switch, browserHistory} from 'react-router-dom';
import {render} from 'react-dom'
import Test from './components/Test';
import Lobby from './components/Lobby';

render(
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" component={Lobby} />
      {/* <Route path="/game/:id" component={Game} /> */}
    </Switch>
  </Router>,
  document.getElementById('main')
)
