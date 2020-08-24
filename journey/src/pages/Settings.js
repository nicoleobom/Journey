import React from 'react';
import '../index.css';
import { useHistory } from 'react-router-dom';

function Settings(props) {
    const history = useHistory();
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h3>Settings</h3>

                <div className="section">
                    <label>Change your avatar:</label><br />
                    <input type="file" id="single" className="settingsinput" onChange={props.onChange} /> <br />
                </div>

                <div className="section">
                    <label>Change your username:</label><br />
                    <input id="newusername" placeholder="new username" className="settingsinput" /><br />
                </div>

                <div className="section">
                    <label>Change your password:</label><br />
                    <input placeholder="old password" className="settingsinput" /><br />
                    <input placeholder="new password" className="settingsinput" /><br />
                    <input placeholder="new password" className="settingsinput" /><br />
                </div>

                <button className="loginbtn" onClick={() => {
                    history.push('/home')
                }}>save</button>
            </div>
        </div>
    );
}

export default Settings;