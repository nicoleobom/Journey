import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default class Results extends React.Component {
    render() {
        const {values: { startpoint, endpoint, budget, people, vehicle, dates, stops, night }} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>Nicole's Trip to Nashville, TN</h3>
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
