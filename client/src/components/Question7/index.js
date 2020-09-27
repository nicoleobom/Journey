import React from 'react';
import './index.css';
import Checkbox from '../Checkbox';

const OPTIONS = ["National Parks", "Restaurants", "Museums", "Coffee", "Beaches and parks"];
let collectStops = [];

export default class Question7 extends React.Component {
    state = {
        checkboxes: OPTIONS.reduce(
          (options, option) => ({
            ...options,
            [option]: false
          }),
          {}
        )
      };

    // selectAll = () => this.selectAllCheckboxes(true);

    // deselectAll = () => this.selectAllCheckboxes(false);
    
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );
    
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
            console.log(checkbox, "is selected.");
            collectStops.push(checkbox);
        });
        this.props.stopsArray(collectStops);
        this.props.nextStep();
    }

    render() {
        return (
            <div className="row home-pg-2" id="q7">
                <form className="col-sm-12 q-header bg-q">
                    <h3>What types of places do you want to stop at?</h3>
                    {this.createCheckboxes()}
                </form>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button className="back" style={{ display: "block", margin: "auto" }} onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>
                        </div>
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button className="next" style={{ display: "block", margin: "auto" }} onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}