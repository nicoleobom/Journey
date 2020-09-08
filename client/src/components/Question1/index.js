import React from 'react';
import './index.css';
// import Searchbar from '../Searchbar/index';

export default class Question1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            query: '',
        }
    }
 
    handleScriptLoad = () => {
        const options = {
            types: ['(cities)']
        }
 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), options,
        );
 
        this.autocomplete.setFields(['address_components', 'formatted_address']);
        this.autocomplete.addListener('places_changed', this.handlePlaceSelect);
    }
 
    handlePlaceSelect = () => {
        debugger;
        const addressObject = this.autocomplete.getPlaces();
        const address = addressObject.address_components;
 
        if(address) {
            this.setState({
                city: address[0].long_name,
                query: addressObject.formatted_address,
            })
            this.props.handleChange('startpoint');
        }
    }
 
    nextQuestion = (event) => {
        event.preventDefault();
        console.log(this.props.startpoint)
        this.props.nextStep();

    }

    render() {
        const { values } = this.props;
        return(
            <div className="row" id="q1">
                <form className="col-sm-12 header bg-q">
                    <h3>Where are you starting from?</h3>
                    <input id="autocomplete"
                        placeholder="Search cities"
                        onChange={this.handleScriptLoad}
                    />
                    {/* <Searchbar /> */}
                </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
            </div>
        )
    }

}