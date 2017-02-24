import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../routes/Home';
import Report from '../routes/Report';
import Requirement from '../routes/Requirement';
import Task from '../routes/Task';
import UserStory from '../routes/UserStory';
import Bug from '../routes/Bug';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/report/:id" component={Report}/>
        <Route path="/newticket/requirement" component={Requirement}/>
        <Route path="/newticket/task" component={Task}/>
        <Route path="/newticket/userstory" component={UserStory}/>
        <Route path="/newticket/bug" component={Bug}/>
       </Router>
    );
  }
}
