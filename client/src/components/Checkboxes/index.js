import React from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                {
                    name: "National Parks",
                    id: 1
                },
                {
                    name: "Top-rated Restaurants",
                    id: 2
                },
                {
                    name: "Dog-friendly Areas",
                    id: 3
                },
                {
                    name: "Museums and Art Exhibits",
                    id: 4
                },
                {
                    name: "Best Coffee",
                    id: 5
                },
                {
                    name: "Beaches and Parks",
                    id: 6
                },
                {
                    name: "Food Trucks",
                    id: 7
                },
                {
                    name: "Walking Trails and Bike Paths",
                    id: 8
                }  
            ]
        }
    }

    render() {
        return (
            <Form>
                <Form.Group>
                {this.state.labels.map(label => (
                    <Form.Check type="checkbox" className="checkbox" label={label.name} key={label.id} />
                ))}
                </Form.Group>
            </Form>
        );
    }
}