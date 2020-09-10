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
                    <select id="vehicle" name="vehicle" defaultValue="car" onChange={this.props.handleChange('vehicle')}>
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                        <option value="Train">Train</option>
                        <option value="Plane">Plane</option>
                    </select>
                 </form>
                 <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}
