// import dependencies
import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, withRouter } from "react-router-dom";

// import pages
import Login from './pages/Login';
import AddTrip from './pages/AddTrip';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Results from './pages/Results';
import PastTrips from './pages/PastTrips';
import ForgotPW from './pages/ForgotPW';

// import components
import Nav from './components/Navbar/index';
import MobileNav from './components/MobileNav/index';
import Loader from './components/Loader/index';
import ResetPassword from './components/Reset Password/index';

// setting up app
import api from './utils/API';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      loading: true
    }

  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    })
  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      const response = await api.authenticate();
      if (response.status === 401) this.props.history.push("/login");
      else this.setState({ signedIn: true });
    } catch (err) {
      console.log(err);
      this.props.history.push("/login");
    }
  }

  render() {
    this.wait();
    if (this.state.loading) return <Loader />;
    return (
      <div className="container">
        <Nav />
        <MobileNav />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Login} />
        <Route path="/new-trip" exact component={AddTrip} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/results" exact component={Results} />
        <Route path="/past-trips" exact component={PastTrips} />
        <Route path="/forgot-password" exact component={ForgotPW} />
        <Route path="/reset-password" exact component={ResetPassword} />
      </div>
    );
  }
}

export default withRouter(App);
