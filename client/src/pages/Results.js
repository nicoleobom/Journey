import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Test from './Test';
import imgSrc from '../assets/images/no-picture-available.jpg'

let btntext;

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
        this.btnText();
    }

    btnText() {
        switch (this.props.values.night) {
            case "airbnb":
                btntext = "Find an AirBnB"
                break;
            case "Hotel":
                btntext = "Find a Hotel"
                break;
            case "campground":
                btntext = "Find campgrounds"
                break;
            default:
                btntext="Home"
                break;
        }
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
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + stopsInCity + "+" + this.props.values.endpoint + "&sensor=false&key=" + apiKey;
            
            await fetch(proxyurl + queryURL)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    for (let i = 0; i < 5; i++) {
                        let placeName = result.results[i].name;
                        let placeRating = result.results[i].rating;
                        let placesUsersRating = result.results[i].user_ratings_total;
                        let address = result.results[i].formatted_address;
                        let photoReference = result.results[i].photos[0].photo_reference;
                        let node = document.createElement('div');
                        let placeDiv = `<h6>${placeName}</h6>
                                        <img onError={this.addDefaultSrc} src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs" />
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
                        <p><span className="results">Places to Visit: </span></p>
                        <div id="placesdiv">

                        </div>
                        <Link to='/test' className="overnight">{btntext}</Link>
                    </div>
                </div>
            </div>
        )
    }
}
