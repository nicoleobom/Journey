import React from 'react';
import Circles from '../Circles/index';

function Question5 (props) {
    if (props.currentQuestion !== 5) {
        return null;
    }
    return(
        <div>
            <h3>How do you want to get there?</h3>
            <Circles />
        </div>
    );
}

export default Question5;