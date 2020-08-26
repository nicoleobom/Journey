import React from 'react';
import Circles from '../components/Circles/index';

function Home() {
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h1>Welcome, Nicole</h1>
                <Circles />
            </div>
        </div>

    );
}

export default Home;