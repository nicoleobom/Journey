import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';
import imgSrc from '../assets/images/no-picture-available.jpg';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
        }

        this.handlePDF = this.handlePDF.bind(this);
    }

    componentDidMount() {
        this.userFirstName();
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
        swal('Trip saved!');
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
                queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + stopsInCity + "+" + this.props.values.endpoint + "&sensor=false&key=" + apiKey;

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

                        let pdfNode = document.createElement('div');
                        let placePdfDiv = `<strong>${placeName}</strong>
                                            <p>${address}</p>`

                        node.innerHTML = placeDiv;
                        pdfNode.innerHTML = placePdfDiv;

                        document.getElementById('placesdiv').appendChild(node);
                        document.getElementById('pdf-PlacesDiv').appendChild(pdfNode);
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
        let queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + night + "+" + endpoint + "&sensor=false&key=" + apiKey;

        if (night === "Hotel" || night === "campground") {
            try {
                await fetch(proxyurl + queryURL)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    if (result.status === "ZERO_RESULTS") {
                        document.getElementById('place-title').style.display = 'none';
                        document.getElementById('hotel-title').style.display = 'none';
                        return null;
                    } else {
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
                            let pdfNode = document.createElement('div');
                            let placePdfDiv = `<strong>${placeName}</strong>
                                                <p>${address}</p>`

                            node.innerHTML = placeDiv;
                            pdfNode.innerHTML = placePdfDiv;

                            document.getElementById('stay').appendChild(node);
                            document.getElementById('pdf-HotelsDiv').appendChild(pdfNode);
                        }
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

    handlePDF() {
        this.updateUserTrip();
        var data = document.getElementById('forPDF');
        var pdf = new jsPDF('p','pt','a4');
        pdf.setFontSize(12);
        data.style.display = 'block';
        pdf.text(100,100, data.innerText);
        pdf.save(`my-trip.pdf`);
        data.style.display = 'none';
    }

    handleDirections() {
        const startpoint = this.props.values.startpoint;
        const endpoint = this.props.values.endpoint;
        const apiKey = process.env.REACT_APP_API_KEY;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const vehicle = this.props.values.vehicle;


        let queryURL = `https://maps.googleapis.com/maps/api/directions/json?
        origin=${startpoint}&destination=${endpoint}
        &avoid=highways
        &mode=${vehicle}
        &key=${apiKey}`


    }

    render() {
        let { values: { endpoint, budget, people, vehicle, startDate, endDate } } = this.props;
        
        return (
            <FadeIn transitionDuration="600">
            <div className="row home-pg-2 r-h2">

                <div className="col-sm-12 scroll">
                    <div id="stickyheader">
                        <button id="saveTrip" onClick={this.updateUserTrip}>Save Trip</button>
                        <button id="download" onClick={this.handlePDF}>Download Trip</button>
                        <Link to="/home"><button id="homeBtn">Home</button></Link>
                    </div>
                    <h3>{this.state.firstname}'s Trip to {endpoint}</h3>
                    <div className="results-content">
                        <Moment className="results" format="MMMM DD, YYYY">
                            {startDate}
                        </Moment>-
                        <Moment className="results" format="MMMM DD, YYYY">
                            {endDate}
                        </Moment>
                        <p><span className="results">Budget: ${budget} </span></p>
                        <p><span className="results">Trippers: {people}</span></p>
                        <p><span className="results">Traveling by: {vehicle}</span></p>
                        {/* <button id="directions" onClick={this.handleDirections}>Get Directions</button> */}
                        <h3>Places to Visit</h3>
                        <div className="row" id="placesdiv">

                        </div>
                        <span id="place-title"><h3>Places to Stay</h3></span>
                        <div className="row" id="stay">

                        </div>
                    </div>
                </div>

                <div id="forPDF">
                    <h4>{this.state.firstname}'s Trip to {endpoint}</h4>
                    <ul>
                        <li>Budget: {budget}</li>
                        <li>Trippers: {people}</li>
                        <li>Traveling by: {vehicle}</li>
                        <li>Start date: {startDate}</li>
                        <li>End date: {endDate}</li>
                    </ul>
                    <h4>Places to Visit:</h4>
                    <div id="pdf-PlacesDiv">

                    </div>
                    <h4><span id="hotel-title">Places to Stay</span></h4>
                    <div id="pdf-HotelsDiv">

                    </div>
                </div>
            </div>
            </FadeIn>
        )
    }
}
