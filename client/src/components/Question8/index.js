import React from 'react';

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
        const { values } = this.props;
        return(
            <div className="row" id="q8">
                <form className="col-sm-12 header bg-q">
                    <h3>How do you prefer to stay the night?</h3>
                    <select id="night" name="night" defaultValue="hotel" onChange={this.props.handleChange('night')}>
                        <option value="hotel">Hotel</option>
                        <option value="campground">Campground</option>
                        <option value="airbnb">AirBnB</option>
                        <option value="friends">Friend's House</option>
                    </select>
                 </form>
                 <button className="next" onClick={this.nextQuestion}><i class="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i class="fas fa-angle-left fa-2x"></i></button>
            </div>
        );
    }  
}