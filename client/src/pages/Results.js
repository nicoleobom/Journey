import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import API from '../utils/API';
import Moment from 'react-moment';
import cities from '../assets/geo/cities';

export default class Results extends React.Component {
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
        console.log(user.firstname);
        this.setState({
            firstname: user.firstname
        })
    }

    render() {
        let {values: { startpoint, endpoint, budget, people, vehicle, startDate, endDate, stops, night }} = this.props;
        const numOfDays = <Moment to={startDate} unit="days">{endDate}</Moment>

        if (endpoint === "I don't know") {
            const randomNumber = Math.floor(Math.random() * (200 - 1) + 1);
            endpoint = cities[randomNumber].city + ", " + cities[randomNumber].state;
        }
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
                    {/* <ListGroup>
                        <ListGroup.Item>{startpoint}</ListGroup.Item>
                        <ListGroup.Item>{endpoint}</ListGroup.Item>
                        <ListGroup.Item>{budget}</ListGroup.Item>
                        <ListGroup.Item>{people}</ListGroup.Item>
                        <ListGroup.Item>Travel by {vehicle}</ListGroup.Item>
                        <ListGroup.Item>{startDate}</ListGroup.Item>
                        <ListGroup.Item>{endDate}</ListGroup.Item>
                        <ListGroup.Item>{stops}</ListGroup.Item>
                        <ListGroup.Item>{night}</ListGroup.Item>
                    </ListGroup> */}
                </div>
            </div>
        )
    }
}
