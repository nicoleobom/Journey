import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import API from '../utils/API';

class Signup extends Component {
    // const history = useHistory();
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            username: null,
            password: null,
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
		if (response.status === 200) {
            this.props.history.push('/home');
            console.log('Successfully added!')
            // this.props.handleSuccess();
        }
	};

    render() {
        return(
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
                    <button className="loginbtn" onClick={this.handleSubmit}>Get started</button>
                </div>
            </div>
        );
    };
};

export default Signup;