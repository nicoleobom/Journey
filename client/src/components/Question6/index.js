import React from 'react';
import './index.css';
import Moment from 'react-moment';

export default class Question6 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {

        if (this.props.values.startDate) {
            if (!this.props.values.endDate) {
                window.alert("Please enter an end date");
                return;
            }
        }

        if (this.props.values.endDate) {
            if (!this.props.values.startDate) {
                window.alert("Please enter a start date");
                return;
            }
        }

        if(!this.props.values.startDate && !this.props.values.endDate) {
            window.alert("Please select dates.");
            return;
        }
        
               
        event.preventDefault(); 
        this.props.nextStep();
    }

    noDate() {
        var randomNumber = Math.floor(Math.random() * (14 - 1) + 1);
        var d = new Date();
        // var newDate = moment(d, "MM-DD-YYYY").add(randomNumber, 'days')
        var newDate = <Moment add={{days: randomNumber}}>{d}</Moment>
        console.log(d)
        // this.props.handleChange('startDate');
        // this.props.handleChange('endDate');
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

        var randomNumber = Math.floor(Math.random() * (14 - 1) + 1);
        var d = new Date();
        var newDate = <Moment add={{days: randomNumber}}>{d}</Moment>
        return(
            <div className="row" id="q6">
                <form className="col-sm-12 header bg-q">
                    <h3>When would you like to go?</h3>
                    <label htmlFor="start">Start date:</label><br />
                    <input id="start" type="date" min={dateString} onChange={this.props.handleChange('startDate')} defaultValue={values.startDate} />
                    <br />
                    <label htmlFor="end">End date:</label><br />
                    <input id="end" type="date" min={this.props.values.startDate} onChange={this.props.handleChange('endDate')} defaultValue={values.endDate} />
                    {/* <p>or</p>
                    <button value={newDate} type="button" onClick={() => {
                        this.props.handleChange('startpoint')
                        this.props.handleChange('endpoint')
                    }}>You tell me!</button> */}
                 </form>
                 <button className="next" onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}