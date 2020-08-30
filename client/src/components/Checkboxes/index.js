import React from 'react';
import { Form } from 'react-bootstrap';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                "National Parks",
                "Top-rated Restaurants",
                "Dog-friendly Areas",
                "Museums and Art Exhibits",
                "Best Coffee",
                "Beaches and Parks",
                "Food Trucks",
                "Walking Trails and Bike Paths",
            ]
        }
    }

    render() {
        return (
            <Form>
                <Form.Group>
                {this.state.labels.map(label => (
                    <Form.Check type="checkbox" label={label} key={this.state.labels.indexOf()} />
                ))}
                </Form.Group>
            </Form>
        );
    }
}