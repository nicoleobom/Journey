import React from 'react';
import './index.css';

export default class Question4 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values } = this.props;
        return(
            <div className="row home-pg-2" id="q4">
                <form className="col-sm-12 header bg-q">
                    <h3>How many people are going?</h3>
                    <input id="people" type="number" onChange={this.props.handleChange('people')} defaultValue={values.people} ></input>
                </form>
                <button className="next" onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}