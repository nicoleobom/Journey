import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import API from '../utils/API';

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
        if(!username.length || !password.length) alert('Please enter both a username and password');
        const response = await API.loginUser({ username, password })
        if(response.status === 200) {
            this.props.history.push('/home');
            this.setState({ isSignedIn: true });
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h1>Journey</h1>
                    <input 
                        id="username"
                        type="text"
                        value={this.state.username}
                        placeholder="username" 
                        name="username"
                        onChange={this.handleInputChange}
                    /><br />
                    <input  
                        value={this.state.password}
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                    /><br />
                    <button className="loginbtn" onClick={this.handleFormSubmit}>login</button>
                    <p id="signupText">New user? <Link to="/signup">Click here to sign up!</Link></p>
                </div>
            </div>
        );
    }
}