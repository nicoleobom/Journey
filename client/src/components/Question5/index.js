import React from 'react';
import './index.css';

export default class Question5 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
        // this.clearForm();
    }
    
    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q5">
                <form className="col-sm-12 header bg-q">
                    <h3>How do you want to get there?</h3>
                    <select id="vehicle" name="vehicle" onChange={this.props.handleChange('vehicle')} defaultValue={values.vehicle}>
                        <option value="car">Car</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="plane">Plane</option>
                    </select>
                 </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        );
    }
}
