import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';
import './index.css';

export default class PastTrip extends React.Component {
    render() {
        const userTrips = this.props.trips;
        const trip = (
            <div> {
                userTrips.map((trip) =>
                    <div className="eachTrip" key={trip._id}>
                        <h4><Moment className="results" format="MMM DD, YYYY">
                            {trip.startDate}
                        </Moment> - <Moment className="results" format="MMM DD, YYYY">
                         {trip.endDate}</Moment></h4>
                        <br />
                        <p><strong>Trip to {trip.endpoint}</strong></p>
                        <p><strong>Budget: </strong>${trip.budget}</p>
                        <p><strong>Vehicle: </strong>{trip.vehicle}</p>
                        <p><strong>Stayed overnight at a </strong>{trip.night}</p>
                    </div>
                )
            }</div>
        );

        return (
            (trip)
        )
    }
}

