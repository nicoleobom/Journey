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
import '../index.css';

export default class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            startpoint: "",
            endpoint: "",
            budget: 0,
            people: 1,
            vehicle: '',
            dates: [],
            stops: [],
            night: '',
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ 
            step: step + 1 
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render() {
        const {step} = this.state;
        const { startpoint, endpoint, budget, people, vehicle, dates, stops, night } = this.state;
        const values = { startpoint, endpoint, budget, people, vehicle, dates, stops, night };
        switch(step) {
            case 1:
                return <Question1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 2:
                return <Question2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 3:
                return <Question3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 4:
                return <Question4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 5:
                return <Question5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 6:
                return <Question6
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 7: 
                return <Question7
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 8:
                return <Question8
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
            case 9:
                return <Results 
                        values={values}
                        />
        }
    }
}