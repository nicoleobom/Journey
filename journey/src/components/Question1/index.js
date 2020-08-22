import React from 'react';
import { Dropdown } from 'react-bootstrap';

class Question1 extends React.Component {
    render() {
        return (
            <div>
                <h3>Where's your starting point?</h3>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose your country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose your state
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown">
                        Choose your city
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            );
    }

}

export default Question1;