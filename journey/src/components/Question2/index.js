import React from 'react';
import { Dropdown } from 'react-bootstrap';

class Question2 extends React.Component {
    render() {
        return (
            <div>
                <h3>Where do you want to go?</h3>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose a country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose a state
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose a city
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            );
    }

}

export default Question2;