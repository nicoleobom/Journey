import React from 'react';
import '../index.css';
import Circles from '../components/Circles/index';

function Settings(props) {
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h3>Settings</h3>

                <p>Change your avatar:</p>
                <input type="file" id="single" onChange={props.onChange} /> <br />

                <label>Change your username:</label><br />
                <input id="newusername" placeholder="new username" className="settingsinput" /><br />

                <label>Change your password:</label><br />
                <input placeholder="old password" className="settingsinput" /><br />
                <input placeholder="new password" className="settingsinput" /><br />
                <input placeholder="new password" className="settingsinput" /><br />

                <button id="loginbtn">save</button>
            </div>
        </div>
    );
}

export default Settings;