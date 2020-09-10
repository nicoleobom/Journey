import React from 'react';
import Checkbox from '../Checkboxes/index';
import './index.css';
import CheckboxContainer from '../CheckboxContainer';

const collectStops = [];

export default class Question7 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    pushArray = (value) => {
        // const collectStops = [];
        collectStops.push(value);
        console.log(collectStops);
        this.props.stopsArray(collectStops);
    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q7">
                <form className="col-sm-12 header bg-q">
                    <h3>What types of places do you want to stop at?</h3>
                    <input id="national-parks" name="national-parks" value="national-parks" type="checkbox" onChange={() => this.pushArray('national-parks')} />
                        <label htmlFor="national-parks">National Parks</label>
                    <br />
                    <input id="restaurants" name="restaurants" value="restaurants" type="checkbox" onChange={() => this.pushArray('restaurants')} />
                        <label htmlFor="restaurants">Top-rated restaurants</label>
                    <br />
                    <input id="dog-friendly" name="dog-friendly" value="dog-friendly" type="checkbox" onChange={() => this.pushArray('dog-friendly')} />
                        <label htmlFor="dog-friendly">Dog-friendly areas</label>
                    <br />
                    <input id="museums" name="museums" value="museums" type="checkbox" onChange={() => this.pushArray('museums')} />
                        <label htmlFor="museums">Museums and art exhibits</label>
                    <br />
                    <input id="coffee" name="coffee" value="coffee" type="checkbox" onChange={() => this.pushArray('coffee')} />
                        <label htmlFor="coffee">Best coffee</label>
                    <br />
                    <input id="beaches-parks" name="beaches-parks" value="beaches-parks" type="checkbox" onChange={() => this.pushArray('beaches-parks')} />
                        <label htmlFor="beaches-parks">Beaches and parks</label>
                    <br />
                    <input id="food-trucks" name="food-trucks" value="food-trucks" type="checkbox" onChange={() => this.pushArray('food-trucks')} />
                        <label htmlFor="food-trucks">Food trucks</label>
                    <br />
                    <input id="trails" name="trails" value="trails" type="checkbox" onChange={() => this.pushArray('trails')} />
                        <label htmlFor="trails">Walking trails and bike paths</label>

                 </form>
                 <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>            </div>
        );
    }
}