import React from 'react';
import API from '../../utils/API';

export default class SignUpForm extends React.Component {
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
    }

    handleSubmit = async event => {
        event.preventDefault();
        const response = await API.createUser(this.state)
        console.log(this.state)
        console.log(response)
        if (response.status === 200) this.props.handleSuccess();
    }

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
        )
    }
}