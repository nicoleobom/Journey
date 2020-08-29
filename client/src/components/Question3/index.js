import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './index.css';

function Question3 (props) {
    if (props.currentQuestion !== 3) {
        return null;
    }
    return(
        <div>
            <h3>What's your budget?</h3>
                <div className="budgetform">
                    <InputGroup className="mb-3 budgetinput">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl min="100" step="100" placeholder="100" type="number" id="budgetinput" aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                    <h3>or</h3>
                    <button id="nobudget">I don't have a budget</button>
                </div>
        </div>
    );
}

export default Question3;