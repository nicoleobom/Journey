import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import API from '../utils/API';
import Circles from '../components/Circles/index';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            username: null,
            password: null,
            accountCreated: false,
        }
    }

    handleSuccess = () => {
        this.setState({ accountCreated: true });
        if (this.state.accountCreated === true) {
            this.signUpComplete();
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        console.log(this.state);
        event.preventDefault();
        const response = await API.createUser(this.state);
        console.log(response);
        this.handleSuccess();
		if (response.status === 200) {
            this.props.history.push('/home');
            console.log('Successfully added!')
            // this.props.handleSuccess();
        }
	};

    signUpComplete = () => {
        return (
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>Your account has been created!</h3>
                    <Link to="/home"><Circles icon={faHome} /></Link>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
            {!this.state.accountCreated ? (
                <div className="row">
                    <div className="col-sm-12 header">
                        <h3>Sign up to start your journey!</h3>
                        <input placeholder="first name" 
                            className="settingsinput" 
                            name="firstname" 
                            onChange={this.handleInputChange}
                            /><br />
                        <input placeholder="last name" 
                            className="settingsinput" 
                            name="lastname" 
                            onChange={this.handleInputChange}
                            /><br />
                        <input placeholder="username" 
                            className="settingsinput" 
                            name="username" 
                            onChange={this.handleInputChange}
                            /><br />
                        <input type="password" 
                            placeholder="password" 
                            className="settingsinput" 
                            name="password" 
                            onChange={this.handleInputChange}
                            /><br />
                        <button className="loginbtn" onClick={this.handleSuccess}>Get started</button>
                        
                    </div>
                </div>
            ) : this.signUpComplete()}
            </div>
        );
    };
};

export default Signup;