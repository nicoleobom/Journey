import React from 'react';
import API from '../utils/API';
import PastTrip from '../components/PastTrip'
import FadeIn from 'react-fade-in';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

 const PastTrips = () => {

    const [user, setUser] = useState({ firstname: '', trips: []})
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/past-trips') {
            getUserData();
        }
    }, [location])

    const getUserData = async () => {
        const user = (await API.getUserData()).data;
        const trips = user.trips
        const reversedTrips = trips.reverse();
        setUser({
            firstname: user.firstname,
            trips: reversedTrips
        })
    }

        return (
            <FadeIn transitionDuration="600">
                <div className="row home-pg">
                    <div className="col-sm-12 header r-h">
                        <h3>{user.firstname}'s Trips</h3>
                        <PastTrip
                            getUserData={getUserData}
                            trips={user.trips}
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

export default PastTrips;