import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function Question3 (props) {
    if (props.currentQuestion != 3) {
        return null;
    }
    return(
        <div>
            <h3>What's your budget?</h3>
            {/* <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup> */}

            <h3>or</h3>
            {/* <button>I don't have a budget</button> */}
        </div>
    );
}

export default Question3;