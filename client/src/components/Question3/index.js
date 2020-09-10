import React from 'react';
import './index.css';

export default class Question3 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q3">
                <form className="col-sm-12 header bg-q">
                    <h3>What's your budget?</h3>
                    $<input type="number" min="100" step="100" onChange={this.props.handleChange('budget')} defaultValue={values.budget} placeholder="Search..."></input>
                </form>
                <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}