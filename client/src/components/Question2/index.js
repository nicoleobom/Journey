import React from 'react';
import './index.css';
import cities from '../../assets/geo/cities'

export default class Question2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState()
        this.handleScriptLoad = this.handleScriptLoad.bind(this)
        this.autocomplete = null
    }

    initialState() {
        return {
          city: '',
          query: '',
        }
      }
 
    handleScriptLoad = () => {
        const options = {
            types: ['(cities)']
        }
 
        /*global google*/
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), options);
        autocomplete.setFields(['address_components', 'formatted_address']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            const address = place.address_components;
 
            if(address) {
                this.setState({
                    city: address[0].long_name,
                    query: place.formatted_address,
                })
                console.log(this.state);
            }

            const endpoint = this.state.query;
            this.props.setLocation('endpoint', endpoint);
        })
        
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    chooseCity = () => {
        const randomLocation = cities[Math.floor(Math.random() * Math.floor(201))];
        const randomCity = randomLocation.city + ', ' + randomLocation.state + ', USA';
        console.log(randomCity);

        this.setState({
            city: randomLocation.city,
            query: randomCity,
        });
        console.log(this.state);
        this.props.setLocation('endpoint', randomCity);
    }

    render() {
        const { values } = this.props;

        return(
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you going?</h3>
                    <input id="autocomplete"
                        placeholder="Search cities"
                        onChange={this.handleScriptLoad}
                    />
                    <p>or</p>
                    <button id="idk" value="I don't know" type="button" onClick={this.chooseCity}>I don't know!</button>
                </form>
                <button className="next" onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>
            </div>
        )
    }

}