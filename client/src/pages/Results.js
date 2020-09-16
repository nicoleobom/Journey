import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';


let infowindow;
let map;
let service;

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname: "",
        }
    }

    componentDidMount() {
        this.userFirstName();
        this.updateUserTrip();
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
        console.log(userData);
    }

    handleSomething = (callback) => {
        const queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.props.values.endpoint + "&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs";
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status === 200) {
                const obj = JSON.parse(xhr.responseText);
                console.log('Success', obj);
                const lat = obj.results[0].geometry.location.lat;
                const lng = obj.results[0].geometry.location.lng;

                this.getPlaces(lat, lng);

            } else {
                console.warn('request_error');
            }
        };

        xhr.open('GET', queryURL);
        xhr.send();

    }

    getPlaces = (lat, lng) => {
        /* global google */
        // var endpointLoc = new google.maps.LatLng(lat, lng);
        debugger;
        const otherQueryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + this.props.values.stops[0] + "&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:30500@" + lat + "," + lng + "&key=AIzaSyBigYllp4tNO7aH6-CXGdx03AWDUHvgaBs"
        var xhr2 = new XMLHttpRequest();

        const obj2 = JSON.parse(xhr2.responseText);
        console.log('Success', obj2);
        
        // xhr2.onreadystatechange = (e) => {
        //     if (xhr2.readyState !== 4) {
        //         return;
        //     }

        //     if (xhr2.status === 200) {
        //         const obj2 = JSON.parse(xhr2.responseText);
        //         console.log('Success', obj2);
        


        //     } else {
        //         console.warn('request_error');
        //     }
        // };

        xhr2.open('GET', otherQueryURL);
        xhr2.send();
    }

    render() {
        this.handleSomething();
        let {values: { endpoint, budget, people, vehicle, startDate, endDate, stops, night }} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 header">
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
                        <div>
                            <span className="results">Check out these places:</span>
                            <span id="placesmap"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
