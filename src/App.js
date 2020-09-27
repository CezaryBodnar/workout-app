import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Exercises from './Components/Exercises'
import Plan from './Components/Plan'
import Progress from './Components/Progress'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Exercises} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/plan" component={Plan} />
            <Route path="/progress" component={Progress} />
          </Switch>
        </div>
        <div className="footer">
          <div className="footer-content">
            Copyright 2020, by Simi
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
