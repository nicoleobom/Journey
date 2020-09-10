import React from 'react';
import './index.css';

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
<<<<<<< HEAD
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), options,
        );
 
        this.autocomplete.setFields(['address_components', 'formatted_address']);
        this.autocomplete.addListener('places_changed', this.handlePlaceSelect);
    }
 
    handlePlaceSelect = () => {
        const addressObject = this.autocomplete.getPlaces();
        const address = addressObject.address_components;
=======
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), options);
        autocomplete.setFields(['address_components', 'formatted_address']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            const address = place.address_components;
>>>>>>> 341316e7af504c748c85211cf6ee0551d7ec6aa5
 
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
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        )
    }

}