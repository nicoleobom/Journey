import React from 'react';

export default class Searchbar extends React.Component {
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
       const addressObject = this.autocomplete.getPlace();
       const address = addressObject.address_components;

       if(address) {
           this.setState({
               city: address[0].long_name,
               query: addressObject.formatted_address,
           })
           console.log(this.state.city);
       }
   }

    render() {
        return (
                <input id="autocomplete"
                    placeholder="Search cities"
                    onChange={this.handleScriptLoad}
                />
        )
    }
}