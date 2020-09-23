import React from 'react';
import API from '../utils/API';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            night: '',
            endpoint: '',
        }
    }

    async componentDidMount() {
        await this.userData();
    }

    userData = async() => {
        debugger;
        const user = (await API.getUserData()).data;
        const tripsArray = user.trips;
        const index = tripsArray.length - 1;
        const latestTrip = tripsArray[index];
        this.setState({
            night: latestTrip.night,
            endpoint: latestTrip.endpoint
        })

        this.handleSomething(this.state.night,this.state.endpoint);
    }

    handleSomething = (night, endpoint) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + night + "+" + endpoint + "&sensor=false&key=" + apiKey;
        
        fetch(proxyurl + queryURL)
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
                    let overnightDiv = `<h6>${placeName}</h6>
                                    <img className="circle-img" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}" />
                                    <p>${placeRating}/5 with ${placesUsersRating} reviews</p>
                                    <p>${address}</p>
                                    `;
                    node.innerHTML = overnightDiv;

                    document.getElementById('overnightDiv').appendChild(node);
                }
            })
    }

    render() {
        return(
            <div className="row home-pg-2 r-h">
                <div className="col-sm-12 scroll">
                    <h3>{this.props.night}s in {this.props.endpoint}</h3>
                    <div className="results-content">
                        <div id="overnightdiv">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}