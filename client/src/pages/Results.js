import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import API from '../utils/API';

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
        const {values: { startpoint, endpoint, budget, people, vehicle, dates, stops, night }} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>{this.state.firstname}'s Trip to {endpoint}</h3>
                    <ListGroup>
                        <ListGroup.Item>{startpoint}</ListGroup.Item>
                        <ListGroup.Item>{endpoint}</ListGroup.Item>
                        <ListGroup.Item>{budget}</ListGroup.Item>
                        <ListGroup.Item>{people}</ListGroup.Item>
                        <ListGroup.Item>{vehicle}</ListGroup.Item>
                        <ListGroup.Item>{dates}</ListGroup.Item>
                        <ListGroup.Item>{stops}</ListGroup.Item>
                        <ListGroup.Item>{night}</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
