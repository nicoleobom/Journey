import React from 'react';
import '../index.css';
import API from '../utils/API';
import swal from 'sweetalert';


export default class Settings extends React.Component {
    updateUserSettings = async () => {
        debugger;
        const user = (await API.getUserData()).data;
        const newusername = document.getElementById('newusername').value;
        const newpassword1 = document.getElementById('newpassword1').value;
        const newpassword2 = document.getElementById('newpassword2').value;
        let settings = {}

        if (newpassword1 !== newpassword2) {
            swal('Passwords do not match.')
        } else if (!newusername && (newpassword1 === newpassword2)) {
            if (newpassword2) settings.password = newpassword2;
            const userPassword = {
                id: user._id,
                password: newpassword2
            }
            API.updateUserSettings(userPassword);
        } else if (newusername && !newpassword1 && !newpassword2) {
            if (newusername) settings.username = newusername;
            const userUsername = {
                id: user._id,
                username: newusername
            }
            API.updateUserSettings(userUsername);
        } else {
            if (!Object.keys(settings).length) return;
        }

        // if (document.getElementById('newpassword1').value === document.getElementById('newpassword2').value) {
        //     let settings = {};
        //     if (document.getElementById('newusername').value) settings.username = (document.getElementById('newusername').value);
        //     if (document.getElementById('newpassword2').value) settings.password = (document.getElementById('newpassword2').value);
        //     console.log(settings);
        //     const userData = {
        //         id: user._id,
        //         username: this.values.username,
        //         password: this.props.values.password
        //     }
        //     API.updateUserSettings(userData);
        //     console.log(userData);
        // } else {
        //     swal('Passwords do not match.')
        // }


        
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>Settings</h3>

                    <div className="section">
                        <label>Change your username:</label><br />
                        <input id="newusername" placeholder="new username" className="settingsinput" /><br />
                    </div>

                    <div className="section">
                        <label>Change your password:</label><br />
                        <input type="password" id="newpassword1" placeholder="new password" className="settingsinput" /><br />
                        <input type="password" id="newpassword2" placeholder="new password" className="settingsinput" /><br />
                    </div>

                    <button className="loginbtn" onClick={this.updateUserSettings}>save</button>
                </div>
            </div>
        );
    }
}

//onClick={<Redirect to="/home" />} 