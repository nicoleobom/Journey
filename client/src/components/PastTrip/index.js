import React from 'react'
import Moment from 'react-moment'

export default class PastTrip extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const userTrips = this.props.trips;
        console.log(userTrips)
        const trip = (
            <div> {
                userTrips.map((trip) => 
                <div key={trip._id}>
                <h4><Moment className="results" format="MMMM DD, YYYY">
                {trip.endDate}
                </Moment> Trip to {trip.endpoint}</h4>
                </div>
                )
            }</div>
        );

        return (
            (trip)
        )
    }
}

