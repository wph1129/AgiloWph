import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../routes/Home';
import Report from '../routes/Report'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/report/1" component={Report}/>
      </Router>
    );
  }
}
