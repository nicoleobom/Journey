import React from 'react';
import '../index.css';
import API from '../utils/API';
// import axios from 'axios';
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';

export default class Settings extends React.Component {

    updateUserSettings = async (event) => {
        event.preventDefault();
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
                document.getElementById('newpassword1').value = "";
                document.getElementById('newpassword2').value = "";
            }
        } else if (newusername && !newpassword1 && !newpassword2) {
            if (newusername) settings.username = newusername;
            const userUsername = {
                id: user._id,
                username: newusername
            }
            API.updateUserName(userUsername);
            swal('Username successfully updated!');
        } else {
            if (!Object.keys(settings).length) return;
        }
    }

    render() {
        return (
            <FadeIn transitionDuration="600">
            <div className="row settings-div">
                <form className="col-sm-12 settings-header" onSubmit={this.updateUserSettings}>
                    <h3>Settings</h3>
                    <div className="section">
                        <label className="label-1">Change your username:</label><br />
                        <input id="newusername" placeholder="new username" className="settingsinput" onChange={this.onChangeUsername} /><br />
                    </div>
                    <div className="section">
                        <label className="label-1">Change your password:</label><br />
                        <input type="password" id="newpassword1" placeholder="new password" className="settingsinput" /><br />
                        <input type="password" id="newpassword2" placeholder="new password" className="settingsinput" onChange={this.onChangePassword}/><br />
                    </div>
                    <button className="loginbtn" type="submit">save</button>
                </form>
            </div>
            </FadeIn>
        );
    }
}
