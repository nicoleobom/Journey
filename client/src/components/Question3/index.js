import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './index.css';

function Question3 (props) {
    if (props.currentQuestion !== 3) {
        return null;
    }
    return(
        <div className="bg-q">
            <h3>What's your budget?</h3>
                <div className="budgetform">
                    <InputGroup className="mb-3 budgetinput">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl min="100" step="100" placeholder="100" type="number" id="budgetinput" aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </div>
        </div>
    );
}

export default Question3;