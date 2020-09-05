import React from 'react';
import Checkbox from '../Checkboxes/index';
import './index.css';

export default class Question7 extends React.Component {
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
            <div className="row" id="q7">
                <form className="col-sm-12 header bg-q">
                    <h3>What types of places do you want to stop at?</h3>
                    <input id="national-parks" name="national-parks" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="national-parks">National Parks</label>
                    
                    <input id="restaurants" name="restaurants" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="restaurants">Top-rated restaurants</label>

                    <input id="dog-friendly" name="dog-friendly" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="dog-friendly">Dog-friendly areas</label>

                    <input id="museums" name="museums" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="museums">Museums and art exhibits</label>

                    <input id="coffee" name="coffee" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="coffee">Best coffee</label>

                    <input id="beaches-parks" name="beaches-parks" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="beaches-parks">Beaches and parks</label>

                    <input id="food-trucks" name="food-trucks" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="food-trucks">Food trucks</label>

                    <input id="trails" name="trails" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label for="trails">Walking trails and bike paths</label>

                 </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        );
    }
    // if (props.currentQuestion !== 7) {
    //     return null;
    // }
    // return(
    //     <div className="bg-q">
    //         <h3>What kinds of places do you want to stop at?</h3>
    //         <div className="leftalign">
    //             <Checkbox />
    //         </div>
    //     </div>
    // );
}