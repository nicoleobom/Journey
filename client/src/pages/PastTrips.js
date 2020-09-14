import React from 'react';
import API from '../utils/API';
import Moment from 'react-moment';
// import PastTrip from '../components/PastTrip'

export default class PastTrips extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            firstname: "",
            trips: []
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = async () => {
        const user = (await API.getUserData()).data;
        this.setState({
            firstname: user.firstname,
            trips: user.trips
        })
    }

    render() {
        const userTrips = this.state.trips;
        // const filteredTrips = userTrips.filter(function (el) {
        //     return el != null;
        //   });
        console.log(userTrips)
        const trip = userTrips.map((trip) => 
            <div key={trip._id}>
                <h4><Moment className="results" format="MMMM DD, YYYY">
                {trip.startDate}
                </Moment> Trip to {trip.endpoint}</h4>
            </div>
        );

        return(
            <div className="row">
                <div className="col-sm-12 header">
                    <h3>{this.state.firstname}'s Trips</h3>
                </div>
                <div>
                    {trip}
                </div>
            </div>
        );
    }
}