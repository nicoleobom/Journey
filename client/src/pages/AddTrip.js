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
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';

export default class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            startpoint: "",
            endpoint: "",
            budget: 500,
            people: 1,
            vehicle: 'Car',
            startDate: "",
            endDate: "",
            stops: [],
            night: 'Hotel',
        }
    }

    // componentDidMount() {
    //     window.addEventListener('beforeunload', this.onUnload);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('beforeunload', this.onUnload);
    // }

    // onUnload = e => {
    //     e.preventDefault();
    //     e.returnValue= "";
    // }

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
        this.setState({ [input]: event.target.value })

    }

    setLocation = (key, value) => {
        this.setState({ [key]: value })
    }

    stopsArray = (stopsArray) => {
        this.setState({ stops: stopsArray })
    }

    render() {
        const { step } = this.state;
        const { startpoint, endpoint, budget, people, vehicle, startDate, endDate, stops, night } = this.state;
        const values = { startpoint, endpoint, budget, people, vehicle, startDate, endDate, stops, night };
        switch (step) {
            default:
                return (
                    <FadeIn transitionDuration="600">
                        <Question1
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            setLocation={this.setLocation}
                            values={values}
                        />
                    </FadeIn>
                );
            case 1:
                return <Question1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    setLocation={this.setLocation}
                    values={values}
                />
            case 2:
                return <Question2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    setLocation={this.setLocation}
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
                    stopsArray={this.stopsArray}
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