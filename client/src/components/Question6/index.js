import { CalendarViewDay } from '@material-ui/icons';
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
        const today = new Date();
        let date = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        if (month < 10) {
            month = "0" + month
        }

        let dateString = year + '-' + month + '-' + date;

        return(
            <div className="row" id="q6">
                <form className="col-sm-12 header bg-q">
                    <h3>When would you like to go?</h3>
                    <label htmlFor="start">Start date:</label>
                    <input id="start" type="date" min={dateString} onChange={this.props.handleChange('startDate')} defaultValue={values.startDate} />
                    <br />
                    <label htmlFor="end">End date:</label>
                    <input id="end" type="date" min={this.props.values.startDate} onChange={this.props.handleChange('endDate')} defaultValue={values.endDate} />
                    <p>or</p>
                    <button value="I don't know" type="button" onClick={this.props.handleChange('startDate', 'endDate')}>You tell me!</button>
                 </form>
                 <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}