import React from 'react';
import Circles from '../components/Circles/index';
import { faCar, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home(props) {
    return(
        <div className="row">
            <div className="col-sm-12 header">
                <h1>Welcome, {props.firstname}</h1>
                <Link to="/past-trips"><Circles icon={faCar}/></Link>
                <Link to="/settings"><Circles icon={faCog}/></Link>
                <Link to="/new-trip"><Circles icon={faPlus}/></Link>
            </div>
        </div>

    );
}

export default Home;