import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';
import imgSrc from '../assets/images/no-picture-available.jpg'

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
        this.handlePlacesToStay();
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

    addDefaultSrc(ev) {
        ev.target.src = imgSrc;
        ev.target.onerror = null;
    }

    handleSomething = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const stopsInCity = this.props.values.stops.toString();
            const budget = this.props.values.budget;
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            let queryURL;

            if (budget <= 500) {
                queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + stopsInCity + "+" + this.props.values.endpoint + "&maxprice=2&sensor=false&key=" + apiKey;

            } else {
                queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + stopsInCity + "+" + this.props.values.endpoint + "&sensor=false&key=" + apiKey;
            }
            
            await fetch(proxyurl + queryURL)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    for (let i = 0; i < 6; i++) {
                        let placeName = result.results[i].name;
                        let placeRating = result.results[i].rating;
                        let placesUsersRating = result.results[i].user_ratings_total;
                        let address = result.results[i].formatted_address;
                        let photoReference = result.results[i].photos[0].photo_reference;
                        let node = document.createElement('div');
                        node.className = ('placesList col-sm-12');
                        node.classList.add = ('col-sm-12');
                        let placeDiv = `<h6>${placeName}</h6>
                                        <ul>
                                        <li><img class="circle-img" onError={this.addDefaultSrc} src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs" /></li>
                                        </ul>
                                        <p>${placeRating}/5 with ${placesUsersRating} reviews</p>
                                        <p>${address}</p>
                                        `;

                        node.innerHTML = placeDiv;

                        document.getElementById('placesdiv').appendChild(node);
                    }
                })
            } catch (err) {
                console.log(err)
            }
    }

    handlePlacesToStay = async () => {
        const night = this.props.values.night;
        const endpoint = this.props.values.endpoint;
        const apiKey = process.env.REACT_APP_API_KEY;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const budget = this.props.values.budget;
        let queryURL;


        if (budget <= 500) {
            queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + night + "+" + endpoint + "&maxprice=2&sensor=false&key=" + apiKey;
        } else {
            queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + night + "+" + endpoint + "&sensor=false&key=" + apiKey;
        }

        if (night === "Hotel" || night === "campground") {
            try {
                await fetch(proxyurl + queryURL)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    for (let i = 0; i < 6; i++) {
                        let placeName = result.results[i].name;
                        let placeRating = result.results[i].rating;
                        let placesUsersRating = result.results[i].user_ratings_total;
                        let address = result.results[i].formatted_address;
                        let photoReference = result.results[i].photos[0].photo_reference;
                        let node = document.createElement('div');
                        node.className = ('placesList col-sm-12');
                        node.classList.add = ('col-sm-12');
                        let placeDiv = `<h6>${placeName}</h6>
                                        <ul>
                                        <li><img class="circle-img" onError={this.addDefaultSrc} src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs" /></li>
                                        </ul>
                                        <p>${placeRating}/5 with ${placesUsersRating} reviews</p>
                                        <p>${address}</p>
                                        `;

                        node.innerHTML = placeDiv;

                        document.getElementById('stay').appendChild(node);
                    }
                })
            } catch (err) {
                console.log(err)
            
            }
        } else {
            document.getElementById('place-title').style.visibility = 'hidden';
            return null;
        }
            
    }

    render() {
        let { values: { endpoint, budget, people, vehicle, startDate, endDate } } = this.props;

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
                        <h3>Places to Visit</h3>
                        <div className="row" id="placesdiv">

                        </div>
                        <h3><span id="place-title">Places to Stay</span></h3>
                        <div className="row" id="stay">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
