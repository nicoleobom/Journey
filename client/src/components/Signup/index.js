import React from 'react';
import swal from 'sweetalert';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            emailAddress: "",
            password: "",
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        if (event.target.name === "username") {
            this.setState({ [name]: value.toLowerCase() });
        } else {
            this.setState({ [name]: value });
        }
        
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { firstname, lastname, emailAddress, username, password } = this.state;
        if (!firstname.length || !lastname.length || !emailAddress.length || !username.length || !password.length) {
            swal('Please enter information into all fields.');
        }
        const response = await API.createUser(this.state)
        if (response.status === 200) this.props.handleSuccess();
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleFormSubmit} className="col-sm-12">
                    <h3>Sign up to start your journey!</h3>
                    <input
                        placeholder="first name"
                        className="settingsinput"
                        minLength='2'
                        maxLength='16'
                        name="firstname"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        placeholder="last name"
                        className="settingsinput"
                        name="lastname"
                        minLength='2'
                        maxLength='24'
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        placeholder="email address"
                        className="settingsinput"
                        name="emailAddress"
                        type="text"
                        value={this.state.emailAddress}
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        placeholder="username"
                        className="settingsinput"
                        id="usernameInput"
                        name="username"
                        type="text"
                        minLength='5'
                        minLength='16'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        type="password"
                        placeholder="password"
                        minLength="5"
                        maxLength="16"
                        className="settingsinput"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    /><br />
                    <button type="submit" className="loginbtn">Get started</button>
                    <p id="signupText">Already got an account? <Link to="/login">Click here to log in!</Link></p>
                </form>
            </div>
        )
    }
}