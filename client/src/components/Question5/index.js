import React from 'react';
import Circles from '../Circles/index';
import { faCar, faBus, faTrain, faPlane} from '@fortawesome/free-solid-svg-icons';

function Question5 (props) {
    if (props.currentQuestion !== 5) {
        return null;
    }
    return(
        <div>
            <h3>How do you want to get there?</h3>
            <Circles icon={faCar}/>
            <Circles icon={faBus}/>
            <Circles icon={faTrain}/>
            <Circles icon={faPlane}/>
        </div>
    );
}

export default Question5;