import React from 'react'
import Moment from 'react-moment'


export default class PastTrip extends React.Component {
    render() {
        const userTrips = this.props.trips;
        console.log(userTrips)
        const trip = (
            <div> {
                userTrips.map((trip) =>
                    <div key={trip._id}>
                        <h4><Moment className="results" format="MMMM DD, YYYY">
                            {trip.endDate}
                        </Moment></h4> <br /><p>Trip to {trip.endpoint}</p>
                    </div>
                )
            }</div>
        );

        return (
            (trip)
        )
    }
}

