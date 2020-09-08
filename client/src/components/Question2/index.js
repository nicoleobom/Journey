import React from 'react';
import './index.css';

export default class Question2 extends React.Component {
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
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you going?</h3>
                    <input className="address" type="text" defaultValue={values.endpoint} placeholder="Enter city"></input><br />
                    <input className="address" type="text" defaultValue={values.endpoint} placeholder="Enter state"></input><br />
                    <input className="address" type="text" onChange={this.props.handleChange('endpoint')} defaultValue={values.endpoint} placeholder="Enter zip"></input>                   
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        )
    }

}