import React from 'react';
import '../index.css';
import Circles from '../components/Circles/index';
import { useHistory } from 'react-router-dom';

function Settings(props) {
    const history = useHistory();
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

                <button className="loginbtn" onClick={() => {
                    history.push('/home')
                }}>save</button>
            </div>
        </div>
    );
}

export default Settings;