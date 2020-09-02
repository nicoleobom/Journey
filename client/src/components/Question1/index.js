import React from 'react';
import './index.css';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import useOnClickOutside from 'react-cool-onclickoutside';
// import { withState } from 'recompose';
// import useOnclickOutside from 'react-cool-onclickoutside';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';


export default class Question1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startpoint: '',
        }
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.autocomplete = null;
        
    }

    componentDidMount = () => {
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), {}
        )

        this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(this.state);
        this.clearForm();
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;
        this.setState({
            startpoint: (address[0].long_name + address[2].short_name)
        });
        console.log(address[0].long_name, address[2].short_name)

    }
    
    render() {
        return(
            <div>
                {/* <Script url="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs" onLoad={this.handleScriptLoad}
                /> */}
                <SearchBar
                    id="autocomplete"
                    ref="input"
                    type="text"
                    placeholder="Search places..."
                    onSubmit={this.handleSubmit}
                    value={this.state.query} 
                    style={{
                        margin: '0 auto',
                        maxWidth: 800,
                    }}
                />
            </div>
        )
    }

}