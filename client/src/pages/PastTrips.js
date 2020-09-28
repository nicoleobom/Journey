import React from 'react';
import API from '../utils/API';
import PastTrip from '../components/PastTrip'
import FadeIn from 'react-fade-in';

export default class PastTrips extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            trips: []
        }
    }

    componentDidMount() {
        debugger;
        this.getUserData();
    }

    getUserData = async () => {
        const user = (await API.getUserData()).data;
        const trips = user.trips
        const reversedTrips = trips.reverse();
        this.setState({
            firstname: user.firstname,
            trips: reversedTrips
        })

        // debugger;
        // const trips = API.getUserData(this.state.trips)
        //     .then(res => {
        //         console.log(res.data);

        //         if (res.data.length === 0) {
        //             throw new Error ('no data found');
        //         }
        //         if (res.data.status === 'error') {
        //             throw new Error (res.data.message);
        //         }

        //         let tripArray = []

        //         for (var i =0; i< res.data.length; i++) {
        //             if (res.data[i].trips.length !== 0) {
        //                 tripArray.push(res.data[i]);
        //             }
        //         }

        //         console.log(tripArray);

        //         this.setState({
        //             trips: tripArray
        //         })
        //     })

    }

    render() {
        return (
            <FadeIn transitionDuration="600">
                <div className="row home-pg">
                    <div className="col-sm-12 header r-h">
                        <h3>{this.state.firstname}'s Trips</h3>
                        <PastTrip
                            getUserData={this.getUserData}
                            trips={this.state.trips}
                        />
                    </div>
                </div>
                <div className="row textCenter">
                    <div className="col-sm-12">
                        
                    </div>
                </div>
            </FadeIn>

        );
    }
}