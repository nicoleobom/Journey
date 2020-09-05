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
    }
    
    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q5">
                <form className="col-sm-12 header bg-q">
                    <h3>How do you want to get there?</h3>
                    <select id="vehicle" name="vehicle" defaultValue={values.vehicle}>
                        <option onSelect={this.props.handleChange('vehicle')} name="car" value="car">Car</option>
                        <option onSelect={this.props.handleChange('vehicle')} name="bus" value="bus">Bus</option>
                        <option onSelect={this.props.handleChange('vehicle')} name="train" value="train">Train</option>
                        <option onSelect={this.props.handleChange('vehicle')} name="plane" value="plane">Plane</option>
                    </select>
                 </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        );
    }
}
