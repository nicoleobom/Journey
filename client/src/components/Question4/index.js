import React from 'react';


function Question4 (props) {
    if (props.currentQuestion !== 4) {
        return null;
    }
    return(
        <div>
            <h3>How many people are joining you?</h3>
            <input value={Number}></input>
        </div>
    );
}

export default Question4;