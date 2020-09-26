import React from 'react';
import './index.css';
import cities from '../../assets/geo/cities'
import swal from 'sweetalert';

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
            const address = place.address_components;

            if (address) {
                this.setState({
                    city: address[0].long_name,
                    query: place.formatted_address,
                })
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
        if (this.state.city === "" && document.getElementById('idk').clicked === undefined) {
            swal('Please enter a value or select "Take me anywhere!".')
        } else {
            this.props.nextStep();
        }
    }

    chooseCity = () => {
        const randomLocation = cities[Math.floor(Math.random() * Math.floor(201))];
        const randomCity = randomLocation.city + ', ' + randomLocation.state + ', USA';
        this.setState({
            city: randomLocation.city,
            query: randomCity,
        });
        this.props.setLocation('endpoint', randomCity);
    }

    render() {
        return (
            <div className="row home-pg-2" id="q1">
                <form className="col-sm-12 q-header bg-q">
                    <h3>Where are you going?</h3>
                    <input id="autocomplete"
                        placeholder="Search cities"
                        onChange={this.handleScriptLoad}
                    />
                    <p>or</p>
                    <button id="idk" value="I don't know" type="button" className="target" onClick={this.chooseCity}>Take me anywhere!</button>
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
        )
    }

}