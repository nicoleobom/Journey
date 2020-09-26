import React, { Component } from 'react';
import Circles from '../components/Circles/index';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/Signup/index';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountCreated: false,
        }
    }

    handleSuccess = () => {
        this.setState({ accountCreated: true });
    }

    signUpComplete = () => {
        return (
            <div className="row">
                <div className="col-sm-12 bg-q">
                    <h3>Your account has been created!</h3>
                    <Link to="/home"><Circles icon={faHome} /></Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="row home-pg-2">
                <div className="col-sm-12 header-2">
                    <h1>Journey</h1>
                    {!this.state.accountCreated ? <SignUpForm handleSuccess={this.handleSuccess} /> : this.signUpComplete()}
                </div>
            </div>
        );
    };
};

export default Signup;