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
            password: null,
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const response = await API.createUser(this.state)
        debugger;
        const { firstname, lastname, username, password } = this.state;
        if (!firstname.length || !lastname.length || !username.length || !password.length) {
            swal('Please enter information into all fields.');
        }
        if (response.status === 200) this.props.handleSuccess();
    }

    render() {
        return(
            <div className="row">
                    <form onSubmit={this.handleFormSubmit} className="col-sm-12">
                        <h3>Sign up to start your journey!</h3>
                        <input
                            placeholder="first name" 
                            className="settingsinput" 
                            name="firstname" 
                            type="text"
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                            /><br />
                        <input
                            placeholder="last name" 
                            className="settingsinput" 
                            name="lastname" 
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                            /><br />
                        <input 
                            placeholder="username" 
                            className="settingsinput" 
                            name="username" 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            /><br />
                        <input
                            type="password" 
                            placeholder="password" 
                            className="settingsinput" 
                            name="password" 
                            type="text"
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