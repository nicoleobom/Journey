import React from 'react';
import Question1 from '../components/Question1/index';
import Question2 from '../components/Question2/index';
import Question3 from '../components/Question3/index';
import Question4 from '../components/Question4/index';
import Question5 from '../components/Question5/index';
import Question6 from '../components/Question6/index';
import Question7 from '../components/Question7/index';
import Question8 from '../components/Question8/index';
import Results from '../pages/Results';
import { Redirect, Link } from 'react-router-dom';

import '../index.css';


class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 1, // default first step
            startpoint: '',
            endpoint: '',
            budget: null,
            people: 0,
            vehicle: [],
            dates: Date(),
            stops: [],
            night: '',
            redirect: null
        }
      

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);

        this.handleChange = this.handleChange.bind(this);
        
    }

    _next() {
        let currentQuestion = this.state.currentQuestion;
        currentQuestion = currentQuestion >= 8 ?  console.log('almost done') : currentQuestion + 1;
        this.setState({
            currentQuestion: currentQuestion
        })
    }

    _results() {
        return(
            <Redirect to={Results} />
        );
    }

    _prev() {
        let currentQuestion = this.state.currentQuestion;
        currentQuestion = currentQuestion < 1 ? 1: currentQuestion - 1;
        this.setState({
            currentQuestion: currentQuestion
        })
    }

    handleChange(event) {
        const { username, value } = event.target
        this.setState({
            [username]: value
        });
    }

    get previousButton() {
        let currentQuestion = this.state.currentQuestion;
        if (currentQuestion !== 1) {
            return(
                <button className="btn prevbtn float-left" type="button" onClick={this._prev}>Back</button>
            )
        }
        return null;
    }

    get nextButton() {
        let currentQuestion = this.state.currentQuestion;
        if (currentQuestion < 8)  {
            return(
                <button className="btn float-right nextbtn" type="button" onClick={this._next}>Next</button>
            )
        } else {
            return(
                <button className="btn float-right nextbtn" ><Link to="/results">Results</Link></button>
            )
        }
        return null;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { startpoint, endpoint, budget, people, vehicle, dates, stops, night } = this.state;
        alert(`Your details: \n
            Starting: ${startpoint}
            Ending: ${endpoint}
            Budget: ${budget}
            People: ${people}
            Vehicle: ${vehicle}
            Dates: ${dates}
            Stops: ${stops}
            Overnight: ${night}
        `)
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 questionheader">
                    <Question1 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        startpoint={this.state.startpoint}
                    />
                    <Question2 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        endpoint={this.state.endpoint}
                    />
                    <Question3 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        budget={this.state.budget}
                    />
                    <Question4 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        people={this.state.people}
                    />
                    <Question5 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        vehicle={this.state.vehicle}
                    />
                    <Question6 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        dates={this.state.dates}
                    />
                    <Question7 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        stops={this.state.stops}
                    />
                    <Question8 
                        currentQuestion={this.state.currentQuestion}
                        handleChange={this.handleChange}
                        night={this.state.night}
                    />
                    {this.previousButton}
                    {this.nextButton}
                </div>
            </div>
        );
    }
}





export default AddTrip;