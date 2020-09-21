import React from 'react';
import '../index.css';
import API from '../utils/API';
import swal from 'sweetalert';

export default class Settings extends React.Component {

    updateUserSettings = async () => {
        const user = (await API.getUserData()).data;
        const newusername = document.getElementById('newusername').value;
        const newpassword1 = document.getElementById('newpassword1').value;
        const newpassword2 = document.getElementById('newpassword2').value;
        let settings = {}

        if (newpassword1 !== newpassword2) {
            swal('Passwords do not match.')
        } else if (!newusername && (newpassword1 === newpassword2)) {
            if (newpassword2) {
                settings.password = newpassword2;
                const userPassword = {
                    id: user._id,
                    password: newpassword2
                }
                API.updateUserPassword(userPassword);
                swal('Password successfully updated!')
            }
        } else if (newusername && !newpassword1 && !newpassword2) {
            if (newusername) settings.username = newusername;
            const userUsername = {
                id: user._id,
                username: newusername
            }
            API.updateUserName(userUsername);
            swal('Username successfully updated!')
        } else {
            if (!Object.keys(settings).length) return;
        }
    }

    render() {
        return (
            <div className="row home-pg">
                <div className="col-sm-12 header">
                    <h3>Settings</h3>
                    <div className="section">
                        <label className="label">Change your username:</label><br />
                        <input id="newusername" placeholder="new username" className="settingsinput" /><br />
                    </div>
                    <div className="section">
                        <label className="label">Change your password:</label><br />
                        <input type="password" id="newpassword1" placeholder="new password" className="settingsinput" /><br />
                        <input type="password" id="newpassword2" placeholder="new password" className="settingsinput" /><br />
                    </div>
                    <button className="loginbtn" onClick={this.updateUserSettings}>save</button>
                </div>
            </div>
        );
    }
}