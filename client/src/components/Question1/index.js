import React from 'react';
import './index.css';

export default class Question1 extends React.Component {

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you starting from?</h3>
                    <input className="address" type="text" defaultValue={values.startpoint} placeholder="Enter city"></input><br />
                    <input className="address" type="text" defaultValue={values.startpoint} placeholder="Enter state"></input><br />
                    <input className="address" type="text" onChange={this.props.handleChange('startpoint')} defaultValue={values.startpoint} placeholder="Enter zip"></input>
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
            </div>
        )
    }

}