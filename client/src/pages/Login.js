import React from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import swal from 'sweetalert';

export default class Login extends React.Component {
    state = {
        username: "",
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
        const { username, password } = this.state;
        if(!username.length || !password.length) swal('Please enter both a username and password');
        const response = await API.loginUser({ username, password });
        if(response.status === 200) {
            this.props.history.push('/home');
            this.setState({ isSignedIn: true });
        }
    };

    render() {
        return(
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
        );
    }
}