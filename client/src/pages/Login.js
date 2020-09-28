import React from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';
import { Fade } from 'react-bootstrap';
import ForgotPW from './ForgotPW';


export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
        isSignedIn: false
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        if (event.target.name === "username") {
            this.setState({ [name]: value.toLowerCase() });
        } else {
            this.setState({ [name]: value });
        }
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        if (!username.length || !password.length) swal('Please enter both a username and password');
        let response;
        try {
            response = await API.loginUser({ username, password });
            if (response.status === 200) {
                    this.props.history.push('/home');
                    this.setState({ isSignedIn: true });
                } 
		} 

		catch (err) {
            swal('Invalid username or password.')
		}
    };

    render() {
        return (
            <FadeIn
                transitionDuration="600"
                >
            <div className="row home-pg-2">
                <form onSubmit={this.handleFormSubmit} className="col-sm-12 header-2">
                    <h1>Journey</h1>
                    <input
                        id="username"
                        type="text"
                        value={this.state.username}
                        placeholder="username"
                        name="username"
                        autoComplete="username"
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        value={this.state.password}
                        placeholder="password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        onChange={this.handleInputChange}
                    /><br />
                    <button type="submit" className="loginbtn">login</button>
                    <p id="signupText">New user? <Link to="/signup">Click here to sign up!</Link></p>
                </form>
            </div>
            </FadeIn>
        );
    }
}