import React from 'react';
import Circles from '../Circles/index';
import { faHotel, faCampground, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';

function Question8 (props) {
    if (props.currentQuestion !== 8) {
        return null;
    }
    return(
        <div>
            <h3>How do you prefer to stay the night?</h3>
            <div className="circles">
                <Circles icon={faHotel}/>
                <Circles icon={faCampground}/>
                <Circles icon={faHome}/>
                <Circles icon={faUserFriends}/>
            </div>
        </div>
    );
}

export default Question8;