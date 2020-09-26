import React from 'react';
import './index.css';

export default class Question3 extends React.Component {
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
        return (
            <div className="row home-pg-2" id="q3">
                <form className="col-sm-12 q-header bg-q">
                    <h3>What's your budget?</h3>
                    <span className="d-s">$</span><input id="budgetinput" type="number" min="100" step="100" onChange={this.props.handleChange('budget')} defaultValue={values.budget} placeholder="1000?"></input>
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