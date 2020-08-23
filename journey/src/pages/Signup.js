import React from 'react';

function Signup() {
    return(
        <div className="row">
            <div className="col-sm-12">
                <h3>Sign up to start your journey!</h3>
                <input placeholder="first name" className="settingsinput" /><br />
                <input placeholder="last name" className="settingsinput" /><br />
                <input placeholder="username" className="settingsinput" /><br />
                <input placeholder="password" className="settingsinput" /><br />
                <button className="loginbtn">Get started</button>
            </div>
        </div>
    );
}

export default Signup;