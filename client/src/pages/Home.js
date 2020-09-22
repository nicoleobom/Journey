import React from 'react';
import Circles from '../components/Circles/index';
import { faCar, faCog, faPlus, faSignOutAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Bubble from '../assets/sounds/zapsplat_cartoon_bubble_pop_007_40279.mp3';
import useSound from 'use-sound';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            soundOn: false
        }
    }

    componentDidMount() {
        this.userFirstName();

        this.audio = new Audio(Bubble);
        this.audio.load();
    }

    handleSoundToggle = () => {
        const audioPromise = this.audio.play();
        if (audioPromise !== undefined) {
            audioPromise
                .then(_ => {

                })
                .catch(err => {
                    console.info(err);
                })
        }
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    render() {
        return (
            <div className="row home-pg">
                <div className="col-sm-12 col-xs-12 header">
                    <h3>Welcome, {this.state.firstname}</h3>
                    <div className="row jc-c">
                        <div className="col-xs-6">
                            <Link to="/new-trip">
                                <Circles 
                                    onMouseEnter={this.handleSoundToggle}
                                    icon={faPlus} />
                            </Link>
                            <Link to="/past-trips">
                                <Circles 
                                    icon={faCar}
                                />
                            </Link>
                        </div>
                        <div className="col-xs-6">
                            <Link to="/settings"><Circles icon={faCog} /></Link>
                            <Link to="/logout"><Circles icon={faSignOutAlt} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}