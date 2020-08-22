import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import AddTrip from './pages/AddTrip';
import Signup from './pages/Signup';
import Settings from './pages/Settings';

var db = require('../../server/models');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/logout" exact component={Home} />
          <Route path="/new-trip" exact component={AddTrip} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/settings" exact component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
