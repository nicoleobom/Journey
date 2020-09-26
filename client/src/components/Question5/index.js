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

    componentDidMount() {
        this.checkBudget();
    }

    checkBudget() {
        const budget = this.props.values.budget;
        if (budget >= 500) {
            let node = document.createElement('option');
            node.className = ('option');
            node.id = ('plane');
            node.value = ('Plane');
            let content = `Plane`

            node.innerHTML = content;
            document.getElementById('vehicle').appendChild(node);
        }
    }

    render() {
        return (
            <div className="row home-pg-2" id="q5">
                <form className="col-sm-12 q-header bg-q">
                    <h3>How do you want to get there?</h3>
                    <select id="vehicle" name="vehicle" defaultValue="car" onChange={this.props.handleChange('vehicle')}>
                        <option className="option" id="car" value="Car">Car</option>
                        <option className="option" id="bus" value="Bus">Bus</option>
                        <option className="option" id="train" value="Train">Train</option>
                    </select>
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
