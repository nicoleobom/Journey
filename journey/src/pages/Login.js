import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h1>Journey</h1>
                <input id="username" placeholder="username" /><br />
                <input placeholder="password" /><br />
                <button className="loginbtn" onClick={() => {
                    history.push('/home')
                }}>login</button>
                <p id="signupText">New user? <a href="/signup">Click here</a> to sign up!</p>
            </div>
        </div>
    );
}

export default Login;