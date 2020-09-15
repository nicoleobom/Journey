import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import API from '../utils/API';
import Moment from 'react-moment';
import cities from '../assets/geo/cities';

export default class Results extends React.Component {
    constructor(props) {
        // super(props);
        this.state={
            firstname: "",
        }
    }

    componentDidMount() {
        this.userFirstName();
        this.updateUserTrip();
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    updateUserTrip = async () => {
        const user = (await API.getUserData()).data;
        const userData = {
            id: user._id,
            trips: this.props.values
        }
        API.updateUserTrip(userData);
        console.log(userData);
    }

    render() {
        let {values: { startpoint, endpoint, budget, people, vehicle, startDate, endDate, stops, night }} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>{this.state.firstname}'s Trip to {endpoint}</h3>
                    <div className="results-content">
                        <Moment className="results" format="MMMM DD, YYYY">
                            {startDate}
                        </Moment>-
                        <Moment className="results" format="MMMM DD, YYYY">
                             {endDate}
                        </Moment>
                        <p><span className="results">Budget: </span>${budget}</p>
                        <p><span className="results">Trippers:</span> {people}</p>
                        <p><span className="results">Traveling by:</span> {vehicle}</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
