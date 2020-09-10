import React, { useState } from 'react';
import './index.css';

export default class Question6 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        if (!this.props.values.startDate || !this.props.values.endDate) {
            window.alert("Please enter a start and end date");
            return;
        }
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q6">
                <form className="col-sm-12 header bg-q">
                    <h3>When would you like to go?</h3>
                    <label htmlFor="start">Start date:</label>
                    <input id="start" type="date" onChange={this.props.handleChange('startDate')} defaultValue={values.startDate} />
                    <br />
                    <label htmlFor="end">End date:</label>
                    <input id="end" type="date" onChange={this.props.handleChange('endDate')} defaultValue={values.endDate} />
                 </form>
                 <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}