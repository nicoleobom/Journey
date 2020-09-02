import React from 'react';
import './index.css';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import useOnClickOutside from 'react-cool-onclickoutside';
// import { withState } from 'recompose';
// import useOnclickOutside from 'react-cool-onclickoutside';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import { checkPropTypes } from 'prop-types';


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
        debugger;
        let addressObject = this.autocomplete.getPlace();
        let newAddress ='';
        const address = addressObject.address_components;
        for (var i=0; i < address.length; i++) {
            let component = address[i].long_name
            newAddress = newAddress + component + ' ';
        }
        console.log(newAddress)
        this.setState({
            startpoint: (newAddress)
        });
        // console.log(address[0].long_name, address[2].short_name)

    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 header bg-q">
                    <h3>Where are you starting from?</h3>
                    <SearchBar
                        id="autocomplete"
                        type="text"
                        placeholder="Search places..."
                        onSubmit={this.handleSubmit}
                        value={this.state.startpoint} 
                        style={{
                            margin: '0 auto',
                            maxWidth: 500,
                        }}
                    />
                </div>
            </div>
        )
    }

}