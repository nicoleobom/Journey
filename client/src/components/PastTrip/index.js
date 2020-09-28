import jsPDF from 'jspdf';
import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './index.css';

export default class PastTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }
    handlePDF() {
        var data = document.getElementById('pastPDF');
        var pdf = new jsPDF('p', 'pt', 'a4');
        pdf.setFontSize(12);
        pdf.text(100,100, data.innerText);
        pdf.save('past-trip.pdf');
    }

    render() {

        const userTrips = this.props.trips;
        const trip = (
            <div> {
                userTrips.map((trip) =>
                    <div className="eachTrip" key={trip._id}>
                        <div id="pastPDF">
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
                        <button id="viewPDF" onClick={this.handlePDF}>View PDF</button>
                    </div>
                )
            }</div>
        );

        return (
            (trip)
        )
    }
}

