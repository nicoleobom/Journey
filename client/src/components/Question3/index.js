import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './index.css';

export default class Question3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: '',
            currentQuestion: 3,
        }
    }

    handleInputChange = event => {
        let value = event.target.value;
        const budget = event.target.budget

        this.setState({ [budget]: value });
    }


    render() {
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
}
