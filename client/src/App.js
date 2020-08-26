// import dependencies
import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Login from './pages/Login';
import AddTrip from './pages/AddTrip';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Home from './pages/Home';

// import components
import Nav from './components/Navbar/index';
import Logo from './components/Logo/index';

// setting up app
// import API from './utils/API';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Logo />
        <Nav />

        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
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
