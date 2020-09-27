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