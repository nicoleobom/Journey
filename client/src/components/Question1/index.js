import React, { setState } from 'react';
import './index.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnClickOutside from 'react-cool-onclickoutside';
import { withState } from 'recompose';

const Question1 = () => {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {

        },
        debounce: 300,
    });

    const ref = useOnClickOutside(() => {
        clearSuggestions();
    });

    const handleInput = event => {
        setValue(event.target.value);
    };

    const handleSelect = ({ description }) => () => {
        debugger;
        setValue(description, false);
        clearSuggestions();

        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log('📍 Coordinates: ', { lat, lng });
            })
            .catch((error) => {
                console.log('Error!', error);
            });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            )
        });



        return (
            <div ref={ref} id="q1" className="bg-q">
                <h3>Where's your starting point?</h3>
                <input
                    className="location-search-input"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Starting at..."
                />
                {status === "OK" && <ul>{renderSuggestions()}</ul>}
            </div>
        )
};


export default Question1;