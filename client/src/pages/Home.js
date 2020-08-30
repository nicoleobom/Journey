import React from 'react';
import Circles from '../components/Circles/index';
import { faCar, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';

function Home(props) {
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h1>Welcome, {props.firstname}</h1>
                <Circles icon={faCar}/>
                <Circles icon={faCog}/>
                <Circles icon={faPlus}/>
            </div>
        </div>

    );
}

export default Home;