import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../routes/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}
