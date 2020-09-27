import React from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';

export default class ForgotPW extends React.Component {
    state = {
        emailAddress: "",
        password: "",
        isSignedIn: false
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { emailAddress } = this.state;
        if (!emailAddress.length) swal('Please enter an email address.');
        // const response = await API.loginUser({ username, password });
        // if (response === undefined ) swal('Invalid username or password.');

        // if (response.status === 200) {
        //     this.props.history.push('/home');
        //     this.setState({ isSignedIn: true });
        // } 
    };

    render() {
        return (
            <FadeIn
                transitionDuration="600"
                >
            <div className="row home-pg-2">
                <form onSubmit={this.handleFormSubmit} className="col-sm-12 header-2">
                    <h1>Journey</h1>
                    <h3>Enter your email to reset your password.</h3>
                    <input
                        id="emailAddress"
                        type="text"
                        value={this.state.emailAddress}
                        placeholder="email"
                        name="email"
                        autoComplete="emailAddress"
                        onChange={this.handleInputChange}
                    /><br />
                    <button type="submit" className="loginbtn">continue</button>
                    <p id="signupText">New user? <Link to="/signup">Click here to sign up!</Link><br /><Link to="/login">Click here to go back.</Link></p>

                </form>
            </div>
            </FadeIn>
        );
    }
}