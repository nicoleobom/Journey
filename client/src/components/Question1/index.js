import React from 'react';
import './index.css';
import Searchbar from '../Searchbar/index';

export default class Question1 extends React.Component {

    nextQuestion = (event) => {
        event.preventDefault();
        console.log(this.props.startpoint)
        this.props.nextStep();

    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you starting from?</h3>
                    {/* <input id="startpoint" className="address" type="text" onChange={this.props.handleChange('startpoint')} placeholder="Enter city, state, and zip"></input><br /> */}
                    <Searchbar />
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
            </div>
        )
    }

}