import React from 'react';
import '../index.css';
import API from '../utils/API';
import axios from 'axios';

export default class Settings extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
            username: '',
            password: '',
=======

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
>>>>>>> 9fe68774c0f858e5566c8829f0f505bf03f62ec6
        }
    }

    componentDidMount() {
        axios.get('/api/user/data')
            .then(res => {
                this.setState({
                    id: res.data._id,
                    username: res.data.username,
                    password: res.data.password
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const userObject = {
            username: this.state.username,
            password: this.state.password
        }
        API.updateUserSettings(userObject)
            .then((res) => {
                console.log(res.data)
                console.log('User updated successfully!')
            })
            .catch((err) => {
                console.log(err);
            })

            this.props.history.push('/home')
    }
    // updateUserSettings = async () => {
    //     debugger;
    //     const user = (await API.getUserData()).data;
    //     const newusername = document.getElementById('newusername').value;
    //     const newpassword1 = document.getElementById('newpassword1').value;
    //     const newpassword2 = document.getElementById('newpassword2').value;
    //     let settings = {}

    //     if (newpassword1 !== newpassword2) {
    //         swal('Passwords do not match.')
    //     } else if (!newusername && (newpassword1 === newpassword2)) {
    //         if (newpassword2) settings.password = newpassword2;
    //         const userPassword = {
    //             id: user._id,
    //             password: newpassword2
    //         }
    //         API.updateUserSettings(userPassword);
    //     } else if (newusername && !newpassword1 && !newpassword2) {
    //         if (newusername) settings.username = newusername;
    //         const userUsername = {
    //             id: user._id,
    //             username: newusername
    //         }
    //         API.updateUserSettings(userUsername);
    //     } else {
    //         if (!Object.keys(settings).length) return;
    //     }
    // }

    render() {
        return (
            <div className="row home-pg">
                <form className="col-sm-12 header" onSubmit={this.onSubmit}>
                    <h3>Settings</h3>
                    <div className="section">
                        <label className="label">Change your username:</label><br />
                        <input id="newusername" placeholder="new username" className="settingsinput" onChange={this.onChangeUsername} /><br />
                    </div>
                    <div className="section">
                        <label className="label">Change your password:</label><br />
                        <input type="password" id="newpassword1" placeholder="new password" className="settingsinput" /><br />
                        <input type="password" id="newpassword2" placeholder="new password" className="settingsinput" onChange={this.onChangePassword}/><br />
                    </div>
                    <button className="loginbtn" type="submit">save</button>
                </form>
            </div>
        );
    }
}

// onClick={this.updateUserSettings}