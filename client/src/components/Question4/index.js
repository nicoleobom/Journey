import React from 'react';
import './index.css';

function Question4 (props) {
    if (props.currentQuestion !== 4) {
        return null;
    }
    return(
        <div className="bg-q">
            <h3>How many people are joining you?</h3>
            <input className="answers" type="number" min="0" max="10" placeholder="0"></input>
        </div>
    );
}

export default Question4;