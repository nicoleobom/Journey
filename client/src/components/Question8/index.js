import React from 'react';
import './index.css';

export default class Question8 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div className="row home-pg-2" id="q8">
                <form className="col-sm-12 header bg-q" onSubmit="return false;">
                    <h3>How do you prefer to stay the night?</h3>
                    <select id="night" name="night" defaultValue="hotel" onChange={this.props.handleChange('night')}>
                        <option className="option" value="hotel">Hotel</option>
                        <option className="option" value="campground">Campground</option>
                        <option className="option" value="airbnb">AirBnB</option>
                        <option className="option" value="friends">Friend's House</option>
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