import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
        }
    }

    componentDidMount() {
        this.userFirstName();
        this.updateUserTrip();
        this.handleSomething();
    }

    userFirstName = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname
        })
    }

    updateUserTrip = async () => {
        const user = (await API.getUserData()).data;
        const userData = {
            id: user._id,
            trips: this.props.values
        }
        API.updateUserTrip(userData);
    }

    handleSomething = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const stopsInCity = this.props.values.stops.toString()
        const queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + stopsInCity + "+" + this.props.values.endpoint + "&sensor=false&key=" + apiKey;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status === 200) {
                const obj = JSON.parse(xhr.responseText);
                const results = obj.results

                for (let i = 0; i < 5; i++) {
                    let placeName = results[i].name;
                    let placeRating = results[i].rating;
                    let placesUsersRating = results[i].user_ratings_total;
                    let address = results[i].formatted_address;

                    let node = document.createElement('div');
                    let placeDiv = `<h6>${placeName}</h6>
                                    <p>${placeRating}/5 with ${placesUsersRating} reviews</p>
                                    <p>${address}</p>
                                    `;
                    node.innerHTML = placeDiv;

                    document.getElementById('placesdiv').appendChild(node)

                }

            } else {
                console.warn('request_error');
            }
        };

        xhr.open('GET', proxyurl + queryURL, false);
        xhr.send(null);

    }

    render() {
        let { values: { endpoint, budget, people, vehicle, startDate, endDate, stops, night } } = this.props;

        return (
            <div className="row home-pg-2 r-h">
                <div className="col-sm-12 scroll">
                    <h3>{this.state.firstname}'s Trip to {endpoint}</h3>
                    <div className="results-content">
                        <Moment className="results" format="MMMM DD, YYYY">
                            {startDate}
                        </Moment>-
                        <Moment className="results" format="MMMM DD, YYYY">
                            {endDate}
                        </Moment>
                        <p><span className="results">Budget: </span>${budget}</p>
                        <p><span className="results">Trippers:</span> {people}</p>
                        <p><span className="results">Traveling by:</span> {vehicle}</p>
                        <p><span className="results">Places to Visit: </span></p>
                        <div id="placesdiv">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
