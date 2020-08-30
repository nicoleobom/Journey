import React from 'react';
import './index.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
let selectedAddress;

class Question1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        }
        
    }

    handleChange = address => {
        this.setState({ address });
    }

    handleSelect = address => {
        
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.log('Error', error));
    };

    

    render() {        
        return (
            <div id="q1" className="bg-q">
                <h3>Where's your starting point?</h3>
                
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ address, getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search places...',
                                    className: 'location-search-input',
                                })}
                                value={address}
                                 />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div id="loading">Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className= suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                    const style = suggestion.active ? { backgroundColor: 'rgba(255,255,255, 0.6)', cursor: 'pointer' } : null;
                                    return(
                                        <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}>
                                        
                                        <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                {/* <Dropdown>
                    <Dropdown.Toggle className="bgcolor">
                        Choose your country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="bgcolor">
                        Choose your state
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="bgcolor">
                        Choose your city
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                </div>
            );
        }

}

export default Question1;