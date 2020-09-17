import React from 'react';
import Circles from '../components/Circles/index';
import { faCar, faCog, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import API from '../utils/API';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname: "",
        }
    }

    componentDidMount() {
        this.userFirstName();
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    render(user) {
        return(
            <div className="row home-pg">
                <div className="col-sm-12 col-xs-12 header">
                    <h3>Welcome, {this.state.firstname}</h3>
                    <div className="row jc-c">
                        <div className="col-xs-6">
                            <Link to="/new-trip"><Circles icon={faPlus}/></Link>
                            <Link to="/past-trips"><Circles icon={faCar}/></Link>
                        </div>
                        <div className="col-xs-6">
                            <Link to="/settings"><Circles icon={faCog}/></Link>
                            <Link to="/logout"><Circles icon={faSignOutAlt}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}