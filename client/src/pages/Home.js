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
        // const { id, firstname } = this.props.match.params;
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    render(user) {
        return(
            <div className="row width">
                <div className="col-sm-12 col-xs-12 header">
                    <h2>Welcome, {this.state.firstname}</h2>
                    <Link to="/new-trip"><Circles icon={faPlus}/></Link>
                    <Link to="/past-trips"><Circles icon={faCar}/></Link>
                    <Link to="/settings"><Circles icon={faCog}/></Link>
                    <Link to="/logout"><Circles icon={faSignOutAlt}/></Link>
                </div>
            </div>
        );
    }
}