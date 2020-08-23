import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import AddTrip from './pages/AddTrip';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Home from './pages/Home';
import logo from './logo.png';

class App extends React.Component {
  render() {
    return (
      <Router>
        <a className="navbar-brand float-left logo" href="#">
          <img src={logo} height="40" alt="journey"/>
        </a>

        <nav className="navbar navstyle float-right">
          <Link to="/" className="navbar-brand"><i class="fas fa-home"></i></Link>
          <Link to="/new-trip" className="navbar-brand"><i class="fas fa-car"></i></Link>
          <Link to="/settings" className="navbar-brand"><i class="fas fa-cog"></i></Link>
          <Link to="/logout" className="navbar-brand"><i class="fas fa-sign-out-alt"></i></Link>
        </nav>
        <div className="container">

          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Login} />
          <Route path="/new-trip" exact component={AddTrip} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/settings" exact component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
